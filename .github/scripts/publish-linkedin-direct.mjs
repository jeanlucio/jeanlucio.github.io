// With a url, the post carries a link preview card; without it, it is a plain text post.
function buildShareContent(text, url, title, description) {
  if (!url) {
    return { shareCommentary: { text }, shareMediaCategory: 'NONE' };
  }
  const media = { status: 'READY', originalUrl: url };
  if (title) media.title = { text: title };
  if (description) media.description = { text: description };
  return { shareCommentary: { text }, shareMediaCategory: 'ARTICLE', media: [media] };
}

async function publishToLinkedIn(accessToken, personUrn, text, url, title, description) {
  const body = {
    author: personUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': buildShareContent(text, url, title, description),
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
  if (!res.ok) throw new Error(`LinkedIn API error: ${await res.text()}`);
  return res.json();
}

const { LINKEDIN_ACCESS_TOKEN, LINKEDIN_PERSON_URN, POST_TEXT, POST_URL, POST_TITLE, POST_DESCRIPTION } = process.env;

if (!LINKEDIN_ACCESS_TOKEN || !LINKEDIN_PERSON_URN) {
  console.error('LINKEDIN_ACCESS_TOKEN and LINKEDIN_PERSON_URN secrets are required.');
  process.exit(1);
}

if (!POST_TEXT || !POST_TEXT.trim()) {
  console.error('POST_TEXT is empty. Nothing to publish.');
  process.exit(1);
}

console.log('Publishing to LinkedIn...');
// The workflow input is a single line, so a literal \n typed there means a line break.
const text = POST_TEXT.replace(/\\n/g, '\n').trim();
const result = await publishToLinkedIn(
  LINKEDIN_ACCESS_TOKEN,
  LINKEDIN_PERSON_URN,
  text,
  POST_URL?.trim() || null,
  POST_TITLE?.trim() || null,
  POST_DESCRIPTION?.trim() || null
);
console.log(`Published: ${result.id}`);
