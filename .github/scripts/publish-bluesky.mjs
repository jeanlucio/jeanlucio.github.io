import { readFileSync } from 'fs';

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (key && value) result[key] = value;
  }
  return result;
}

function getPostUrl(filePath, siteUrl) {
  const slug = filePath.replace('src/content/blog/', '').replace('.md', '');
  return `${siteUrl}/blog/${slug}/`;
}

async function createSession(handle, password) {
  const res = await fetch('https://bsky.social/xrpc/com.atproto.server.createSession', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: handle, password }),
  });
  if (!res.ok) throw new Error(`Falha na autenticação Bluesky: ${await res.text()}`);
  return res.json();
}

async function publishPost(accessJwt, did, title, description, postUrl) {
  const text = `${title}\n\n${postUrl}`;
  const encoder = new TextEncoder();
  const urlByteStart = encoder.encode(text.slice(0, text.lastIndexOf(postUrl))).length;
  const urlByteEnd = urlByteStart + encoder.encode(postUrl).length;

  const record = {
    $type: 'app.bsky.feed.post',
    text,
    facets: [
      {
        index: { byteStart: urlByteStart, byteEnd: urlByteEnd },
        features: [{ $type: 'app.bsky.richtext.facet#link', uri: postUrl }],
      },
    ],
    embed: {
      $type: 'app.bsky.embed.external',
      external: { uri: postUrl, title, description },
    },
    createdAt: new Date().toISOString(),
  };

  const res = await fetch('https://bsky.social/xrpc/com.atproto.repo.createRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessJwt}`,
    },
    body: JSON.stringify({ repo: did, collection: 'app.bsky.feed.post', record }),
  });
  if (!res.ok) throw new Error(`Falha ao publicar no Bluesky: ${await res.text()}`);
  return res.json();
}

const { BLUESKY_HANDLE, BLUESKY_APP_PASSWORD, NEW_FILES, SITE_URL } = process.env;

if (!BLUESKY_HANDLE || !BLUESKY_APP_PASSWORD) {
  console.log('Secrets do Bluesky não configurados, pulando.');
  process.exit(0);
}

const files = NEW_FILES.trim().split(/\s+/).filter(Boolean);

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const meta = parseFrontmatter(content);
  const postUrl = getPostUrl(filePath, SITE_URL);
  const title = meta.title || 'Novo post';
  const description = meta.description || '';

  console.log(`Publicando no Bluesky: ${title}`);
  const session = await createSession(BLUESKY_HANDLE, BLUESKY_APP_PASSWORD);
  const result = await publishPost(session.accessJwt, session.did, title, description, postUrl);
  console.log(`Publicado: ${result.uri}`);
}
