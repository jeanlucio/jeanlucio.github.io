async function publishToLinkedIn(accessToken, personUrn, text) {
  const body = {
    author: personUrn,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: 'NONE',
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
  if (!res.ok) throw new Error(`LinkedIn API error: ${await res.text()}`);
  return res.json();
}

const { LINKEDIN_ACCESS_TOKEN, LINKEDIN_PERSON_URN, POST_TEXT } = process.env;

if (!LINKEDIN_ACCESS_TOKEN || !LINKEDIN_PERSON_URN) {
  console.error('LINKEDIN_ACCESS_TOKEN and LINKEDIN_PERSON_URN secrets are required.');
  process.exit(1);
}

if (!POST_TEXT || !POST_TEXT.trim()) {
  console.error('POST_TEXT is empty. Nothing to publish.');
  process.exit(1);
}

console.log('Publishing to LinkedIn...');
const result = await publishToLinkedIn(LINKEDIN_ACCESS_TOKEN, LINKEDIN_PERSON_URN, POST_TEXT.trim());
console.log(`Published: ${result.id}`);
