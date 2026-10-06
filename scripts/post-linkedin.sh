#!/usr/bin/env bash
set -euo pipefail

FILE="${1:-/tmp/linkedin-post.txt}"

if [ ! -f "$FILE" ]; then
  echo "Error: file not found: $FILE"
  echo "Usage: [POST_URL=... POST_TITLE=... POST_DESCRIPTION=...] bash scripts/post-linkedin.sh [path/to/post.txt]"
  echo "With POST_URL the post carries a link preview card."
  exit 1
fi

TEXT=$(cat "$FILE")

if [ -z "$TEXT" ]; then
  echo "Error: file is empty."
  exit 1
fi

echo "--- Post preview ---"
echo "$TEXT"
echo "--------------------"
echo ""

# Skip confirmation when stdin is not a terminal (e.g. Claude Code piping input)
if [ -t 0 ]; then
  read -r -p "Publish to LinkedIn? [y/N] " confirm
  if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
    echo "Aborted."
    exit 0
  fi
fi

gh api repos/jeanlucio/jeanlucio.github.io/actions/workflows/linkedin-post.yml/dispatches \
  --method POST \
  --input <(jq -n --arg ref "main" --arg text "$TEXT" \
    --arg url "${POST_URL:-}" --arg title "${POST_TITLE:-}" --arg description "${POST_DESCRIPTION:-}" \
    '{"ref": $ref, "inputs": ({"text": $text}
      + (if $url != "" then {"url": $url} else {} end)
      + (if $title != "" then {"title": $title} else {} end)
      + (if $description != "" then {"description": $description} else {} end))}')

echo ""
echo "Workflow triggered."
echo "Track it at: https://github.com/jeanlucio/jeanlucio.github.io/actions"
