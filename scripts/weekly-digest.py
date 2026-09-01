#!/usr/bin/env python3
# Gera o post "Destaques da Semana" com os plugins novos detectados no Moodle.org.
#
# Modos de uso:
#   weekly-digest.py --preview   (domingo 20h) — gera rascunho, envia prévia no Telegram
#   weekly-digest.py --publish   (segunda 14h) — publica o rascunho se ainda não commitado

import json
import re
import subprocess
import sys
import datetime
import urllib.request
from pathlib import Path

ENV_FILE     = Path.home() / '.phpcs-ai.env'
WEEKLY_FILE  = Path.home() / '.moodle-plugins-weekly.json'
DRAFT_FILE   = Path.home() / '.moodle-weekly-draft.json'
SITE_REPO    = Path.home() / 'jeanlucio-github-io'
BLOG_DIR     = SITE_REPO / 'src' / 'content' / 'blog'

TOP_N        = 7   # Máximo de plugins destacados no post


# ---------------------------------------------------------------------------
# Utilitários
# ---------------------------------------------------------------------------

def load_env() -> dict:
    env: dict = {}
    if not ENV_FILE.exists():
        return env
    for line in ENV_FILE.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith('#') and '=' in line:
            key, _, val = line.partition('=')
            env[key.strip()] = val.strip()
    return env


def week_range() -> tuple[datetime.date, datetime.date]:
    today = datetime.date.today()
    # When running on Monday (publish day), refer to the week that just ended.
    if today.weekday() == 0:
        today -= datetime.timedelta(days=1)
    monday = today - datetime.timedelta(days=today.weekday())
    sunday = monday + datetime.timedelta(days=6)
    return monday, sunday


def format_date_range(monday: datetime.date, sunday: datetime.date) -> str:
    months = [
        '', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
        'jul', 'ago', 'set', 'out', 'nov', 'dez',
    ]
    if monday.month == sunday.month:
        return f'{monday.day} a {sunday.day} de {months[sunday.month]}'
    return f'{monday.day} {months[monday.month]} a {sunday.day} {months[sunday.month]}'


def post_slug(pub_date: datetime.date) -> str:
    return f'destaques-semana-{pub_date.strftime("%Y-%m-%d")}'


# ---------------------------------------------------------------------------
# Chamadas de IA
# ---------------------------------------------------------------------------

def http_post(url: str, headers: dict, body: dict) -> dict:
    data = json.dumps(body).encode()
    req = urllib.request.Request(
        url,
        data=data,
        headers={**headers, 'Content-Type': 'application/json'},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read())


def call_gemini(prompt: str, key: str) -> str:
    url = (
        'https://generativelanguage.googleapis.com/v1beta/'
        f'models/gemini-2.0-flash:generateContent?key={key}'
    )
    body = {'contents': [{'parts': [{'text': prompt}]}]}
    result = http_post(url, {}, body)
    return result['candidates'][0]['content']['parts'][0]['text'].strip()


def call_openai_compat(prompt: str, key: str, api_url: str, model: str) -> str:
    body = {
        'model': model,
        'messages': [{'role': 'user', 'content': prompt}],
        'max_tokens': 6000,
    }
    result = http_post(api_url, {'Authorization': f'Bearer {key}'}, body)
    return result['choices'][0]['message']['content'].strip()


def call_ai(prompt: str, env: dict) -> str:
    providers = []
    if env.get('GEMINI_KEY'):
        providers.append(lambda: call_gemini(prompt, env['GEMINI_KEY']))
    if env.get('OPENAI_KEY') and env.get('OPENAI_URL'):
        providers.append(lambda: call_openai_compat(
            prompt, env['OPENAI_KEY'], env['OPENAI_URL'],
            env.get('OPENAI_MODEL', 'deepseek/deepseek-v4-flash'),
        ))
    if env.get('OPENAI2_KEY') and env.get('OPENAI2_URL'):
        providers.append(lambda: call_openai_compat(
            prompt, env['OPENAI2_KEY'], env['OPENAI2_URL'],
            env.get('OPENAI2_MODEL', 'openai/gpt-oss-120b:free'),
        ))
    for fn in providers:
        try:
            result = fn()
            if result:
                return result
        except Exception as exc:
            print(f'  IA falhou: {exc}')
    raise RuntimeError('Todos os provedores de IA falharam.')


# ---------------------------------------------------------------------------
# Avaliação: vale publicar mesmo com poucos plugins?
# ---------------------------------------------------------------------------

def ai_worth_publishing(plugins: list[dict], env: dict) -> tuple[bool, str]:
    plugin_list = '\n'.join(
        f'- {p["name"]} ({p["component"]}): {p["summary"]}'
        for p in plugins
    )
    prompt = (
        f'Há apenas {len(plugins)} plugin(s) novo(s) no Moodle Plugin Directory esta semana:\n\n'
        f'{plugin_list}\n\n'
        'Como especialista em Moodle, avalie: existe pelo menos um plugin aqui que seja '
        'suficientemente relevante ou inovador para justificar um post de blog para '
        'professores e administradores de Moodle?\n'
        'Responda EXATAMENTE no formato:\n'
        'DECISAO: SIM\n'
        'MOTIVO: <uma frase explicando>\n'
        'ou\n'
        'DECISAO: NAO\n'
        'MOTIVO: <uma frase explicando>'
    )
    try:
        response = call_ai(prompt, env)
        sim = bool(re.search(r'^DECISAO:\s*SIM', response, re.MULTILINE | re.IGNORECASE))
        motivo_match = re.search(r'^MOTIVO:\s*(.+)', response, re.MULTILINE)
        motivo = motivo_match.group(1).strip() if motivo_match else response[:120]
        return sim, motivo
    except Exception as exc:
        return True, f'(avaliação de IA falhou: {exc})'


# ---------------------------------------------------------------------------
# Geração do post
# ---------------------------------------------------------------------------

def build_digest_prompt(plugins: list[dict], date_range: str) -> str:
    plugin_list = '\n\n'.join(
        f'{i+1}. **{p["name"]}** (`{p["component"]}`) — {p["tipo"]}\n'
        f'   {p["summary"]}\n'
        f'   {p["link"]}'
        for i, p in enumerate(plugins)
    )
    n = min(TOP_N, len(plugins))
    return (
        'Você é um educador especialista em Moodle escrevendo para um blog técnico em português brasileiro. '
        f'Abaixo estão {len(plugins)} plugin(s) lançado(s) esta semana no Moodle Plugin Directory. '
        f'Selecione até {n} que sejam interessantes para professores, coordenadores e administradores de Moodle '
        '(pedagogia, produtividade, acessibilidade ou novidades técnicas relevantes). '
        'Ignore os que sejam muito específicos de nicho, redundantes com o core do Moodle ou sem diferencial claro.\n\n'
        'REGRAS DE LINGUAGEM — siga à risca:\n'
        f'- TITULO: use exatamente o formato "Destaques da semana — novos plugins no Moodle ({date_range})"\n'
        '- Nunca use superlativos ou números no título nem na introdução '
        '(proibido: "essenciais", "melhores", "mais úteis", "7 plugins que vão...")\n'
        '- A introdução deve ser neutra: apenas situe o leitor sobre os lançamentos da semana, sem ranking\n'
        '- A conclusão deve ser simples e neutra, sem prometer transformação ou resultados da instituição\n'
        '- Cada plugin: seção `## [Nome](link)` com 2-3 parágrafos sobre o que faz e para quem é útil\n\n'
        'Escreva o post com o seguinte formato EXATO, sem markdown extra:\n\n'
        '---INICIO---\n'
        'TITULO: <título do post>\n'
        'DESCRICAO: <uma frase descrevendo os plugins abordados, máximo 160 caracteres, sem superlativos>\n'
        'TAGS: <lista de tags separadas por vírgula>\n'
        'CORPO:\n'
        '<corpo completo em Markdown: introdução neutra de 1-2 linhas, '
        'uma seção `## [Nome do Plugin](link)` para cada plugin selecionado com '
        '2-3 parágrafos sobre o que faz e por que é interessante, '
        'e uma conclusão curta e neutra>\n'
        '---FIM---\n\n'
        f'Plugins da semana de {date_range}:\n\n'
        f'{plugin_list}'
    )


def parse_ai_response(text: str, date_range: str) -> dict:
    match = re.search(r'---INICIO---\s*(.*?)\s*---FIM---', text, re.DOTALL)
    block = match.group(1) if match else text

    def extract(label: str) -> str:
        m = re.search(rf'^{label}:\s*(.+)', block, re.MULTILINE)
        return m.group(1).strip() if m else ''

    corpo_match = re.search(r'^CORPO:\s*\n(.*)', block, re.DOTALL | re.MULTILINE)
    corpo = corpo_match.group(1).strip() if corpo_match else block

    return {
        'title': extract('TITULO') or f'Destaques da Semana — {date_range.title()}',
        'description': extract('DESCRICAO') or (
            f'Novos plugins lançados no Moodle Plugin Directory na semana de {date_range}.'
        ),
        'tags': [t.strip() for t in extract('TAGS').split(',') if t.strip()] or [
            'moodle', 'plugins', 'novidades'
        ],
        'body': corpo,
    }


def write_draft(slug: str, parsed: dict, pub_date: datetime.date) -> Path:
    tags_yaml = ', '.join(parsed['tags'])
    frontmatter = (
        f'---\n'
        f'title: "{parsed["title"]}"\n'
        f'description: "{parsed["description"]}"\n'
        f'pubDate: {pub_date.isoformat()}\n'
        f'category: moodle\n'
        f'tags: [{tags_yaml}]\n'
        f'---\n\n'
    )
    path = BLOG_DIR / f'{slug}.md'
    path.write_text(frontmatter + parsed['body'] + '\n', encoding='utf-8')
    return path


# ---------------------------------------------------------------------------
# Telegram
# ---------------------------------------------------------------------------

def send_telegram(token: str, chat_id: str, text: str) -> None:
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    body = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown',
        'disable_web_page_preview': True,
    }
    http_post(url, {}, body)


def build_preview_message(
    parsed: dict,
    post_path: Path,
    date_range: str,
    plugin_count: int,
) -> str:
    body_preview = parsed['body'][:600].rsplit('\n', 1)[0]
    tags = ', '.join(f'`{t}`' for t in parsed['tags'][:5])
    rel_path = post_path.relative_to(Path.home())
    return (
        f'📋 *Prévia — Destaques da Semana ({date_range})*\n\n'
        f'*{parsed["title"]}*\n'
        f'_{parsed["description"]}_\n\n'
        f'{body_preview}…\n\n'
        f'🏷 {tags}\n'
        f'📦 {plugin_count} plugin(s) detectado(s)\n\n'
        f'📝 Edite se necessário:\n`~/{rel_path}`\n\n'
        f'⏰ Será publicado automaticamente na *segunda-feira às 14h*.\n'
        f'Se já tiver editado e quiser publicar antes, faça o commit manualmente.'
    )


# ---------------------------------------------------------------------------
# Git helpers
# ---------------------------------------------------------------------------

def git_is_tracked(post_path: Path) -> bool:
    result = subprocess.run(
        ['git', 'ls-files', '--error-unmatch',
         str(post_path.relative_to(SITE_REPO))],
        cwd=SITE_REPO,
        capture_output=True,
    )
    return result.returncode == 0


def git_commit_push(post_path: Path, slug: str) -> None:
    rel = str(post_path.relative_to(SITE_REPO))
    subprocess.run(['git', 'add', rel], cwd=SITE_REPO, check=True)
    subprocess.run(
        ['git', 'commit', '-m', f'add weekly digest {slug}'],
        cwd=SITE_REPO, check=True,
    )
    # Remote moves on its own (the update-versions GitHub Action commits on a
    # schedule), so rebase onto it before pushing or the push is rejected with
    # "fetch first" and the digest never reaches the blog.
    subprocess.run(['git', 'fetch', 'origin', 'main'], cwd=SITE_REPO, check=True)
    subprocess.run(['git', 'rebase', 'origin/main'], cwd=SITE_REPO, check=True)
    subprocess.run(['git', 'push'], cwd=SITE_REPO, check=True)


# ---------------------------------------------------------------------------
# Modo --preview  (domingo 20h)
# ---------------------------------------------------------------------------

def run_preview() -> None:
    if not WEEKLY_FILE.exists():
        print('Nenhum dado acumulado. Encerrando.')
        return

    plugins: list[dict] = json.loads(WEEKLY_FILE.read_text())

    if not plugins:
        print('Acumulador vazio. Encerrando.')
        return

    env = load_env()
    token = env.get('TELEGRAM_TOKEN', '')
    chat_id = env.get('TELEGRAM_CHAT_ID', '')

    if len(plugins) < 3:
        print(f'Apenas {len(plugins)} plugin(s) — consultando IA sobre relevância...')
        worth, motivo = ai_worth_publishing(plugins, env)
        print(f'  Decisão: {"SIM" if worth else "NÃO"} — {motivo}')
        if not worth:
            msg = (
                f'📭 *Destaques da Semana — sem post esta semana*\n\n'
                f'Apenas {len(plugins)} plugin(s) novo(s) e a IA avaliou que não '
                f'justifica publicação.\n_{motivo}_'
            )
            if token and chat_id:
                send_telegram(token, chat_id, msg)
            print('Encerrando sem publicar.')
            return

    monday, sunday = week_range()
    date_range = format_date_range(monday, sunday)
    publish_date = sunday + datetime.timedelta(days=1)
    slug = post_slug(publish_date)
    post_path = BLOG_DIR / f'{slug}.md'

    if post_path.exists():
        print(f'Rascunho já existe: {post_path.name}. Encerrando.')
        return

    print(f'Gerando digest da semana de {date_range} com {len(plugins)} plugin(s)...')
    raw = call_ai(build_digest_prompt(plugins, date_range), env)
    parsed = parse_ai_response(raw, date_range)

    post_path = write_draft(slug, parsed, publish_date)
    print(f'Rascunho criado: {post_path}')

    DRAFT_FILE.write_text(json.dumps({
        'slug': slug,
        'path': str(post_path),
        'created_at': datetime.datetime.now().isoformat(timespec='seconds'),
    }, ensure_ascii=False))

    if token and chat_id:
        msg = build_preview_message(parsed, post_path, date_range, len(plugins))
        send_telegram(token, chat_id, msg)
        print('Prévia enviada via Telegram.')

    WEEKLY_FILE.write_text('[]', encoding='utf-8')
    print('Acumulador limpo. Post será publicado na segunda às 14h.')


# ---------------------------------------------------------------------------
# Modo --publish  (segunda 14h)
# ---------------------------------------------------------------------------

def run_publish() -> None:
    if not DRAFT_FILE.exists():
        print('Nenhum rascunho pendente. Encerrando.')
        return

    draft = json.loads(DRAFT_FILE.read_text())
    slug = draft['slug']
    post_path = Path(draft['path'])

    env = load_env()
    token = env.get('TELEGRAM_TOKEN', '')
    chat_id = env.get('TELEGRAM_CHAT_ID', '')

    if not post_path.exists():
        print(f'Arquivo removido manualmente: {post_path}')
        DRAFT_FILE.unlink()
        return

    if git_is_tracked(post_path):
        print(f'Post {slug} já foi commitado manualmente. Nada a fazer.')
        DRAFT_FILE.unlink()
        return

    print(f'Publicando rascunho: {slug}')
    try:
        git_commit_push(post_path, slug)
    except subprocess.CalledProcessError as exc:
        print(f'Falha ao commitar/publicar: {exc}')
        if token and chat_id:
            send_telegram(
                token, chat_id,
                f'❌ *Falha ao publicar o digest*\n\n`{slug}`\n\n'
                f'O commit/push falhou (`{exc}`). O rascunho continua '
                f'pendente — rode `weekly-digest.py --publish` de novo ou '
                f'publique manualmente.',
            )
        sys.exit(1)
    print('Commit e push realizados.')

    if token and chat_id:
        send_telegram(
            token, chat_id,
            f'✅ *Post publicado automaticamente*\n\n`{slug}`\n\n'
            f'Disponível no site em alguns minutos.',
        )

    DRAFT_FILE.unlink()
    print('Concluído.')


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    mode = sys.argv[1] if len(sys.argv) > 1 else '--preview'
    if mode == '--publish':
        run_publish()
    elif mode == '--preview':
        run_preview()
    else:
        print(f'Modo inválido: {mode}. Use --preview ou --publish.')
        sys.exit(1)


if __name__ == '__main__':
    main()
