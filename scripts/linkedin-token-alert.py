#!/usr/bin/env python3
# Avisa via Telegram quando o token do LinkedIn (secret LINKEDIN_ACCESS_TOKEN) está perto de vencer.
#
# O token vale 60 dias e o LinkedIn não permite renová-lo por API: é preciso gerar um novo no
# Token Generator do portal e colar no secret. A data da última renovação vem do próprio GitHub
# (updatedAt do secret), então o alerta zera sozinho assim que o secret é atualizado — não há
# arquivo de data para lembrar de mexer.
#
# Avisos: 10, 3 e 1 dia antes do vencimento, e todo dia depois que venceu, até renovar.
#
# Uso:
#   linkedin-token-alert.py                   (cron diário, 9h) — envia o aviso se for a hora
#   linkedin-token-alert.py --dry-run         — mostra o que faria, sem enviar nem gravar estado
#   linkedin-token-alert.py --days-left N     — simula N dias restantes (implica --dry-run)

import argparse
import datetime
import json
import subprocess
import sys
import urllib.request
from pathlib import Path

ENV_FILE = Path.home() / '.phpcs-ai.env'
STATE_FILE = Path.home() / '.linkedin-token-alert.json'
REPO = 'jeanlucio/jeanlucio.github.io'
SECRET_NAME = 'LINKEDIN_ACCESS_TOKEN'
TOKEN_LIFETIME_DAYS = 60
# Descending order: the stage of a given day is the smallest threshold it has already crossed.
ALERT_DAYS = (10, 3, 1)
GENERATOR_URL = 'https://www.linkedin.com/developers/tools/oauth/token-generator'
SECRETS_URL = f'https://github.com/{REPO}/settings/secrets/actions'


def load_env() -> dict:
    env: dict = {}
    if not ENV_FILE.exists():
        return env
    for raw in ENV_FILE.read_text().splitlines():
        raw = raw.strip()
        if raw and not raw.startswith('#') and '=' in raw:
            key, _, val = raw.partition('=')
            env[key.strip()] = val.strip()
    return env


def load_state() -> dict:
    if STATE_FILE.exists():
        try:
            return json.loads(STATE_FILE.read_text())
        except ValueError:
            return {}
    return {}


def save_state(state: dict) -> None:
    STATE_FILE.write_text(json.dumps(state))


def send_telegram(token: str, chat_id: str, text: str) -> None:
    url = f'https://api.telegram.org/bot{token}/sendMessage'
    data = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown',
        'disable_web_page_preview': True,
    }).encode()
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=40) as resp:
        resp.read()


def secret_updated_at() -> datetime.datetime:
    """Return when the GitHub secret was last written (UTC), i.e. when the token was renewed."""
    result = subprocess.run(
        ['gh', 'secret', 'list', '--repo', REPO, '--json', 'name,updatedAt'],
        capture_output=True, text=True, check=True, timeout=60,
    )
    for secret in json.loads(result.stdout):
        if secret['name'] == SECRET_NAME:
            return datetime.datetime.fromisoformat(secret['updatedAt'].replace('Z', '+00:00'))
    raise RuntimeError(f'secret {SECRET_NAME} não encontrado em {REPO}')


def stage_for(days_left: int) -> int | None:
    """Alert stage for the days left: a threshold in ALERT_DAYS, 0 once expired, None when too early."""
    if days_left <= 0:
        return 0
    crossed = [t for t in ALERT_DAYS if days_left <= t]
    return min(crossed) if crossed else None


def build_message(days_left: int, expiry: datetime.date) -> str:
    steps = (
        f'1. Gere o token em {GENERATOR_URL} (app "Blog Prof. Jean Lúcio", escopos '
        f'`w_member_social`, `openid`, `profile`)\n'
        f'2. Atualize o secret `{SECRET_NAME}` em {SECRETS_URL}\n\n'
        f'O alerta zera sozinho depois que o secret for atualizado.'
    )
    if days_left <= 0:
        return (
            f'🚨 *Token do LinkedIn venceu* ({expiry:%d/%m/%Y})\n\n'
            f'Os posts automáticos no LinkedIn vão falhar com `EXPIRED_ACCESS_TOKEN`. '
            f'O Bluesky continua funcionando.\n\n{steps}'
        )
    plural = 'dia' if days_left == 1 else 'dias'
    return (
        f'🔑 *Token do LinkedIn vence em {days_left} {plural}* ({expiry:%d/%m/%Y})\n\n'
        f'Renove antes disso para os posts do blog continuarem saindo no LinkedIn.\n\n{steps}'
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--dry-run', action='store_true', help='não envia nem grava estado')
    parser.add_argument('--days-left', type=int, help='simula N dias restantes (implica --dry-run)')
    args = parser.parse_args()
    dry_run = args.dry_run or args.days_left is not None

    today = datetime.datetime.now(datetime.timezone.utc).date()
    if args.days_left is not None:
        updated_at = None
        expiry = today + datetime.timedelta(days=args.days_left)
    else:
        updated_at = secret_updated_at()
        expiry = (updated_at + datetime.timedelta(days=TOKEN_LIFETIME_DAYS)).date()
    days_left = (expiry - today).days
    print(f'Token renovado em {updated_at or "(simulado)"}; vence em {expiry} ({days_left} dia(s)).')

    stage = stage_for(days_left)
    if stage is None:
        print('Fora da janela de aviso. Nada a fazer.')
        return 0

    state = load_state()
    key = updated_at.isoformat() if updated_at else 'simulated'
    if state.get('updated_at') != key:
        # The secret was rewritten since the last run: new token, start the alerts over.
        state = {'updated_at': key, 'sent': [], 'expired_on': None}

    if stage == 0:
        if state.get('expired_on') == today.isoformat():
            print('Aviso de token vencido já enviado hoje.')
            return 0
    elif stage in state['sent']:
        print(f'Aviso do estágio {stage} já enviado.')
        return 0

    message = build_message(days_left, expiry)
    if dry_run:
        print(f'[dry-run] mensagem que seria enviada:\n\n{message}')
        return 0

    env = load_env()
    token, chat_id = env.get('TELEGRAM_TOKEN', ''), env.get('TELEGRAM_CHAT_ID', '')
    if not token or not chat_id:
        print(f'TELEGRAM_TOKEN ou TELEGRAM_CHAT_ID ausentes em {ENV_FILE}', file=sys.stderr)
        return 1
    send_telegram(token, chat_id, message)
    if stage == 0:
        state['expired_on'] = today.isoformat()
    else:
        state['sent'].append(stage)
    save_state(state)
    print('Aviso enviado via Telegram.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
