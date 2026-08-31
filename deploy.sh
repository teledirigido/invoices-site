#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

REMOTE_HOST="root@64.226.113.71"
REMOTE_PATH="/var/www/site"

NITIDEZ_APP_URL="https://app.nitidez.es" UMAMI_WEBSITE_ID="3bb674f5-f470-46d8-a9c0-68019867f2d1" npm run generate

rsync -avz --delete --exclude=".DS_Store" .output/public/ "$REMOTE_HOST:$REMOTE_PATH/"
ssh "$REMOTE_HOST" "chown -R www-data:www-data $REMOTE_PATH"

echo "Deployed to https://nitidez.es"
