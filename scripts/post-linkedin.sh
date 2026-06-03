#!/usr/bin/env bash
set -euo pipefail

FILE="${1:-/tmp/linkedin-post.txt}"

if [ ! -f "$FILE" ]; then
  echo "Error: file not found: $FILE"
  echo "Usage: bash scripts/post-linkedin.sh [path/to/post.txt]"
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
    '{"ref": $ref, "inputs": {"text": $text}}')

echo ""
echo "Workflow triggered."
echo "Track it at: https://github.com/jeanlucio/jeanlucio.github.io/actions"
