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

async function publishToLinkedIn(accessToken, personUrn, title, description, postUrl) {
  const body = {
    author: personUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: {
          text: `${title}\n\n${description}\n\n${postUrl}`,
        },
        shareMediaCategory: 'ARTICLE',
        media: [
          {
            status: 'READY',
            description: { text: description },
            originalUrl: postUrl,
            title: { text: title },
          },
        ],
      },
    },
    visibility: {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
    },
  };

  const res = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Falha ao publicar no LinkedIn: ${await res.text()}`);
  return res.json();
}

const { LINKEDIN_ACCESS_TOKEN, LINKEDIN_PERSON_URN, NEW_FILES, SITE_URL } = process.env;

if (!LINKEDIN_ACCESS_TOKEN || !LINKEDIN_PERSON_URN) {
  console.log('Secrets do LinkedIn não configurados, pulando.');
  process.exit(0);
}

const files = NEW_FILES.trim().split(/\s+/).filter(Boolean);

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const meta = parseFrontmatter(content);
  const postUrl = getPostUrl(filePath, SITE_URL);
  const title = meta.title || 'Novo post';
  const description = meta.description || '';

  console.log(`Publicando no LinkedIn: ${title}`);
  const result = await publishToLinkedIn(
    LINKEDIN_ACCESS_TOKEN,
    LINKEDIN_PERSON_URN,
    title,
    description,
    postUrl
  );
  console.log(`Publicado: ${result.id}`);
}
