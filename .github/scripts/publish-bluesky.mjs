import { existsSync, readFileSync } from 'fs';

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

const MAX_GRAPHEMES = 300;

// Custom text for a post lives in .github/social/<slug>.bluesky.txt (committed with the post).
// Bluesky caps posts at 300 graphemes, so an over-long file falls back to "title + link" with a warning.
function getCustomText(filePath, postUrl) {
  const slug = filePath.replace('src/content/blog/', '').replace('.md', '');
  const customPath = `.github/social/${slug}.bluesky.txt`;
  if (!existsSync(customPath)) return null;
  const raw = readFileSync(customPath, 'utf-8').trim();
  if (!raw) return null;
  const text = raw.includes(postUrl) ? raw : `${raw}\n\n${postUrl}`;
  const length = [...new Intl.Segmenter().segment(text)].length;
  if (length > MAX_GRAPHEMES) {
    console.log(`::warning::${customPath} tem ${length} caracteres (limite ${MAX_GRAPHEMES}); usando título + link.`);
    return null;
  }
  return text;
}

// Link and hashtag facets are indexed in UTF-8 bytes, not in JS string characters.
function buildFacets(text, postUrl) {
  const encoder = new TextEncoder();
  const byteOffset = (charIndex) => encoder.encode(text.slice(0, charIndex)).length;
  const facets = [];

  const urlStart = text.lastIndexOf(postUrl);
  if (urlStart !== -1) {
    facets.push({
      index: { byteStart: byteOffset(urlStart), byteEnd: byteOffset(urlStart + postUrl.length) },
      features: [{ $type: 'app.bsky.richtext.facet#link', uri: postUrl }],
    });
  }

  for (const match of text.matchAll(/(^|\s)#([\p{L}\p{N}_]+)/gu)) {
    const hashStart = match.index + match[1].length;
    facets.push({
      index: { byteStart: byteOffset(hashStart), byteEnd: byteOffset(hashStart + match[2].length + 1) },
      features: [{ $type: 'app.bsky.richtext.facet#tag', tag: match[2] }],
    });
  }
  return facets;
}

async function publishPost(accessJwt, did, title, description, postUrl, customText) {
  const text = customText ?? `${title}\n\n${postUrl}`;

  const record = {
    $type: 'app.bsky.feed.post',
    text,
    facets: buildFacets(text, postUrl),
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
  const result = await publishPost(
    session.accessJwt,
    session.did,
    title,
    description,
    postUrl,
    getCustomText(filePath, postUrl)
  );
  console.log(`Publicado: ${result.uri}`);
}
