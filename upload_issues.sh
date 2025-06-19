
# === НАСТРОЙКИ ===
GITHUB_TOKEN="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"
REPO_OWNER="drema180625"
REPO_NAME="ArkVR"

# === ЗАГРУЗКА ISSUE ИЗ JSON ===
FILE="arkvr_issues.json"

for row in $(jq -c '.[]' "$FILE"); do
  TITLE=$(echo "$row" | jq -r '.title')
  BODY=$(echo "$row" | jq -r '.body')
  LABELS=$(echo "$row" | jq -c '.labels')

  curl -s -X POST "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/issues" \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -d "$(jq -n --arg title "$TITLE" --arg body "$BODY" --argjson labels "$LABELS" '{title: $title, body: $body, labels: $labels}')" | jq '.html_url'
done
