# site/ — Public Landing Page (Static Nuxt)

Standalone static-generated (`nuxt generate`) Nuxt project, decoupled from the
main app so the public/marketing site can be iterated on and deployed
independently. Domain split: `nitidez.es` → this static site, `app.nitidez.es`
→ the existing Nuxt app (unchanged, still CSR + Nitro/PM2).

Copied from `../nuxt`: `index.vue`, `public.vue` layout, `pages/privacy.vue`,
all their components/composables, SCSS, i18n, and images. Verified: builds,
prerenders, renders correctly (screenshot-checked), no console errors.

## To do before this is production-ready

- [ ] **CORS on the main backend.** `/api/notify` (`nuxt/server/routes/api/notify/index.post.ts`)
      has no CORS headers today. Cross-origin POSTs from the static site's
      origin (`nitidez.es` or wherever it's hosted) will fail until this is
      added — needs `Access-Control-Allow-Origin` (and preflight `OPTIONS`
      handling) scoped to the known static-site origin(s).
- [ ] **`app.nitidez.es` DNS + Nginx.** The login link in `public.vue` already
      points to `https://app.nitidez.es/login`, but that subdomain doesn't
      exist yet. Needs: DNS A/CNAME record, new Nginx `server{}` block (or
      repoint the current one), separate Let's Encrypt cert or SAN on the
      existing one.
- [ ] **Nginx for `nitidez.es` itself.** Decide the static site's deploy path
      (e.g. `rsync`/`scp` of `.output/public` to the server) and add/update the
      Nginx `server{}` block to serve it as static files — no PM2/Node process
      needed.
- [X] **`site/` git setup.** Currently untracked (no `.git`). Decide: new
      standalone repo, or folded into an existing one.
- [ ] **npm install caveat.** System npm (10.9.8) crashes on install here with
      an arborist `edgesOut` bug. Use `npx npm@11 install` until the global
      npm is upgraded.

## Known pre-existing issue (not introduced by this copy)

- `Hero.vue` uses `icon="mdi-arrow-right"` (dash) instead of the colon form
  (`mdi:arrow-right`) used elsewhere. Same bug exists in the live app's
  `Hero.vue` — left as-is, not fixed here.

## Open decisions

- Where does the static site actually get hosted/deployed from — same VPS
  (Nginx serving a static dir) or elsewhere (Netlify/Vercel/Cloudflare Pages)?
- Should `nuxt generate` run in CI, or manually before each deploy?
