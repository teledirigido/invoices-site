# site/ — Public Landing Page (Static Nuxt)

Standalone static-generated (`nuxt generate`) Nuxt project, decoupled from the
main app so the public/marketing site can be iterated on and deployed
independently. Domain split: `nitidez.es` → this static site, `app.nitidez.es`
→ the existing Nuxt app (unchanged, still CSR + Nitro/PM2).

Copied from `../nuxt`: `index.vue`, `public.vue` layout, `pages/privacy.vue`,
all their components/composables, SCSS, i18n, and images. Verified: builds,
prerenders, renders correctly (screenshot-checked), no console errors.

## To do before this is production-ready

- [X] **CORS on the main backend.** Added `nuxt/server/middleware/cors.ts`,
      scoped to the `/api/notify` prefix. Handles preflight `OPTIONS` and sets
      `Access-Control-Allow-Origin` for any origin listed in the
      `NOTIFY_ALLOWED_ORIGINS` env var (comma-separated). Set to
      `http://localhost:3002` locally (site/'s dev port); prod
      `ecosystem.config.cjs` includes `https://nitidez.es`. Deployed and
      verified live: preflight `OPTIONS` from `https://nitidez.es` to
      `https://app.nitidez.es/api/notify` returns 204 with the correct
      `Access-Control-Allow-Origin`.
- [X] **`app.nitidez.es` DNS + Nginx.** DNS A record added in Cloudflare
      (proxied). New Nginx `server{}` block at
      `/etc/nginx/sites-available/app.nitidez.es` proxying to the existing
      app on `localhost:3000` (same backend as `nitidez.es` for now — they
      won't diverge until the static site takes over `nitidez.es`, see below).
      Separate Let's Encrypt cert issued via `certbot --nginx -d
      app.nitidez.es`, HTTP→HTTPS redirect configured. Verified:
      `https://app.nitidez.es/login` returns 200.
- [X] **Nginx for `nitidez.es` itself.** Static site deployed to
      `root@64.226.113.71:/var/www/site` (owned by `www-data`). Nginx
      `server{}` block for `nitidez.es`/`www.nitidez.es` now serves it
      directly (`root /var/www/site;` + `try_files`) — no PM2/Node process,
      existing cert reused. `/api/*` is no longer proxied through
      `nitidez.es`; the notify form calls `app.nitidez.es` cross-origin
      (`config.public.appUrl`, already defaulted correctly), relying on the
      `NOTIFY_ALLOWED_ORIGINS` CORS middleware above. The `auth`/`notify`
      Nginx rate-limit zones moved to `/etc/nginx/conf.d/rate-limits.conf`
      (shared, since they're now applied on the `app.nitidez.es` block
      instead). Deploy: `npm run deploy` in `site/` (runs `nuxt generate` +
      rsyncs `.output/public/` to the server) — see `site/deploy.sh`. Note:
      `deploy.sh` sets `NITIDEZ_APP_URL=https://app.nitidez.es` explicitly at
      build time (the local `.env` has the dev value `localhost:3000`, which
      would otherwise get baked into the static build's login link).
- [X] **`site/` git setup.** Currently untracked (no `.git`). Decide: new
      standalone repo, or folded into an existing one.
- [ ] **npm install caveat.** System npm (10.9.8) crashes on install here with
      an arborist `edgesOut` bug. Use `npx npm@11 install` until the global
      npm is upgraded.

## Fallout from the domain split (fixed)

- **`invoices-mcp`'s `NITIDEZ_APP_URL`** was still `https://nitidez.es`
  (now the static site) after the cutover — broke every MCP tool that calls
  the backend API or generates dashboard/invoice links
  (`nitro-mcp/server/mcp/api-client.ts`, `auth.ts`,
  `oauth-protected-resource.get.ts`, `tools/invoices.ts`, `tools/tax.ts`).
  Fixed: updated `NITIDEZ_APP_URL` to `https://app.nitidez.es` in
  `/var/www/invoices-mcp/ecosystem.config.cjs` on the server and restarted
  (`pm2 restart ecosystem.config.cjs --update-env`). Verified via
  `https://mcp.nitidez.es/.well-known/oauth-protected-resource`.

## Known pre-existing issue (not introduced by this copy)

- `Hero.vue` uses `icon="mdi-arrow-right"` (dash) instead of the colon form
  (`mdi:arrow-right`) used elsewhere. Same bug exists in the live app's
  `Hero.vue` — left as-is, not fixed here.

## Open decisions

- Where does the static site actually get hosted/deployed from — same VPS
  (Nginx serving a static dir) or elsewhere (Netlify/Vercel/Cloudflare Pages)?
- Should `nuxt generate` run in CI, or manually before each deploy?
