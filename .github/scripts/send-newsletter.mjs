/**
 * send-newsletter.mjs
 *
 * Script semanal que:
 * 1. Lê o RSS feed do blog
 * 2. Coleta posts publicados nos últimos 7 dias
 * 3. Se houver posts novos, envia um email via API do Buttondown
 *
 * Uso: node .github/scripts/send-newsletter.mjs
 * Requer: BUTTONDOWN_API_KEY no ambiente
 */

import { parseStringPromise } from 'xml2js';

const RSS_URL = 'https://jeanlucio.github.io/rss.xml';
const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY;
const NEWSLETTER_NAME = 'Destaques Semanais — Blog do Prof. Jean Lúcio';
const DRY_RUN = process.env.DRY_RUN === 'true';

if (!BUTTONDOWN_API_KEY) {
  console.error('❌ BUTTONDOWN_API_KEY não definida.');
  process.exit(1);
}

// ── Utilitários ─────────────────────────────────────────────────────────────

function getOneWeekAgo() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return d;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// ── Buscar RSS ───────────────────────────────────────────────────────────────

async function fetchRecentPosts() {
  console.log(`📡 Buscando RSS: ${RSS_URL}`);
  const res = await fetch(RSS_URL);
  if (!res.ok) throw new Error(`Falha ao buscar RSS: ${res.status}`);
  const xml = await res.text();
  const parsed = await parseStringPromise(xml);

  const items = parsed?.rss?.channel?.[0]?.item ?? [];
  const oneWeekAgo = getOneWeekAgo();

  const recent = items.filter((item) => {
    const pubDate = new Date(item.pubDate?.[0]);
    return pubDate >= oneWeekAgo;
  });

  return recent.map((item) => ({
    title: item.title?.[0] ?? '(sem título)',
    link: item.link?.[0] ?? '',
    description: item.description?.[0] ?? '',
    pubDate: item.pubDate?.[0] ?? '',
  }));
}

// ── Montar email ─────────────────────────────────────────────────────────────

function buildEmailBody(posts) {
  const intro =
    posts.length === 1
      ? `Esta semana publiquei um novo artigo no blog:`
      : `Esta semana publiquei ${posts.length} novos artigos no blog:`;

  const postsList = posts
    .map(
      (p) => `
<div style="margin-bottom:24px; padding:20px; background:#f8fafc; border-left:4px solid #6366f1; border-radius:6px;">
  <h3 style="margin:0 0 8px; font-size:18px;">
    <a href="${p.link}" style="color:#6366f1; text-decoration:none;">${p.title}</a>
  </h3>
  <p style="margin:0 0 8px; color:#64748b; font-size:14px;">Publicado em ${formatDate(p.pubDate)}</p>
  <p style="margin:0; color:#374151; font-size:15px; line-height:1.6;">${p.description}</p>
  <a href="${p.link}" style="display:inline-block; margin-top:12px; padding:8px 16px; background:#6366f1; color:#fff; text-decoration:none; border-radius:6px; font-size:14px; font-weight:600;">Ler artigo →</a>
</div>`
    )
    .join('\n');

  return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width:600px; margin:0 auto; color:#1e293b;">

  <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6); padding:32px 24px; border-radius:12px 12px 0 0; text-align:center;">
    <h1 style="margin:0; color:#fff; font-size:22px;">📬 Destaques da Semana</h1>
    <p style="margin:8px 0 0; color:rgba(255,255,255,0.85); font-size:14px;">Blog do Prof. Jean Lúcio</p>
  </div>

  <div style="padding:32px 24px; background:#fff; border:1px solid #e2e8f0; border-top:none; border-radius:0 0 12px 12px;">
    <p style="font-size:16px; line-height:1.6; margin-top:0;">${intro}</p>

    ${postsList}

    <hr style="border:none; border-top:1px solid #e2e8f0; margin:32px 0;" />

    <p style="font-size:13px; color:#94a3b8; margin:0;">
      Você está recebendo este email porque assinou os <strong>Destaques Semanais</strong>
      do blog <a href="https://jeanlucio.github.io" style="color:#6366f1;">jeanlucio.github.io</a>.
    </p>
  </div>

</div>
`;
}

function buildEmailSubject(posts) {
  const week = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' });
  if (posts.length === 1) {
    return `📬 Novo post: ${posts[0].title}`;
  }
  return `📬 ${posts.length} novos posts esta semana (${week})`;
}

// ── Enviar via Buttondown API ────────────────────────────────────────────────

async function sendNewsletter(posts) {
  const subject = buildEmailSubject(posts);
  const body = buildEmailBody(posts);

  console.log(`\n📧 Assunto: ${subject}`);
  console.log(`📋 Posts incluídos: ${posts.map((p) => p.title).join(', ')}`);

  if (DRY_RUN) {
    console.log('\n🧪 DRY RUN ativado — email não enviado.');
    return;
  }

  const res = await fetch('https://api.buttondown.com/v1/emails', {
    method: 'POST',
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Buttondown-Live-Dangerously': 'true',
    },
    body: JSON.stringify({
      subject,
      body,
      status: 'about_to_send', // envia imediatamente para todos os assinantes
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Erro na API do Buttondown: ${res.status} — ${err}`);
  }

  const data = await res.json();
  console.log(`\n✅ Email enviado com sucesso! ID: ${data.id}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🗞️  ${NEWSLETTER_NAME}`);
  console.log('─'.repeat(50));

  const posts = await fetchRecentPosts();

  if (posts.length === 0) {
    console.log('\n📭 Nenhum post novo esta semana. Nada a enviar.');
    return;
  }

  console.log(`\n✨ ${posts.length} post(s) novo(s) encontrado(s):`);
  posts.forEach((p) => console.log(`  • ${p.title}`));

  await sendNewsletter(posts);
}

main().catch((err) => {
  console.error('\n❌ Erro:', err.message);
  process.exit(1);
});
