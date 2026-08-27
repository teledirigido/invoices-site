#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

REMOTE_HOST="root@64.226.113.71"
REMOTE_PATH="/var/www/site"

NITIDEZ_APP_URL="https://app.nitidez.es" npm run generate

rsync -avz --delete .output/public/ "$REMOTE_HOST:$REMOTE_PATH/"
ssh "$REMOTE_HOST" "chown -R www-data:www-data $REMOTE_PATH"

echo "Deployed to https://nitidez.es"
