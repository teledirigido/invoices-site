import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },

  app: {
    head: {
      title: 'Nitidez.es',
      meta: [
        { property: 'og:image', content: '/images/open-graph.png' },
        { property: 'og:url', content: 'https://nitidez.es' },
        { property: 'og:type', content: 'website' },
        { name: 'author', content: 'hi@miguel.nz' },
      ],
      script: [
        // Static pages: the root is generated in Spanish. A visitor who chose English
        // (i18n_locale cookie) or, with no choice, whose first supported browser
        // language is English goes to /en before anything is painted, so the Spanish
        // page never flashes.
        {
          tagPosition: 'head',
          innerHTML: `(function(){if(location.pathname!=='/')return;var m=document.cookie.match(/(?:^|; )i18n_locale=([^;]+)/);var l=m&&m[1];if(!l){var ls=navigator.languages||[navigator.language];for(var i=0;i<ls.length;i++){var c=String(ls[i]).slice(0,2).toLowerCase();if(c==='es'||c==='en'){l=c;break;}}}if(l==='en')location.replace('/en'+location.search+location.hash);})()`,
        },
        ...(process.env.UMAMI_WEBSITE_ID
          ? [
              {
                src: 'https://cloud.umami.is/script.js',
                defer: true,
                'data-website-id': process.env.UMAMI_WEBSITE_ID,
              },
            ]
          : []),
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicon/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/images/favicon/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/images/favicon/android-chrome-512x512.png',
        },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      appUrl: process.env.NITIDEZ_APP_URL ?? 'https://app.nitidez.es',
      siteUrl: process.env.NITIDEZ_SITE_URL ?? 'https://nitidez.es',
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  hooks: {
    'content:file:beforeParse'(ctx) {
      if (typeof ctx.file.body !== 'string') return;
      const appUrl = process.env.NITIDEZ_APP_URL ?? 'https://app.nitidez.es';
      ctx.file.body = ctx.file.body
        .replaceAll('{{appUrl}}', appUrl)
        // Prettier indents a `::` that follows a list item; close the block on its own line.
        .replace(/^[ \t]+(:{2,})[ \t]*$/gm, '\n$1');
    },
  },

  // /en is not linked from the Spanish pages (the locale switcher is a select), so
  // the crawler starts from it too.
  nitro: {
    prerender: {
      routes: ['/', '/en'],
    },
  },

  site: {
    url: process.env.NITIDEZ_SITE_URL ?? 'https://nitidez.es',
  },

  i18n: {
    baseUrl: process.env.NITIDEZ_SITE_URL ?? 'https://nitidez.es',
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    locales: [
      {
        code: 'en',
        language: 'en-GB',
        name: 'English',
        files: ['en.json', 'pages/index/en.json', 'layout/public/en.json'],
      },
      {
        code: 'es',
        language: 'es-ES',
        name: 'Español',
        files: ['es.json', 'pages/index/es.json', 'layout/public/es.json'],
      },
    ],
    restructureDir: '.',
    langDir: 'app/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      cookieSecure: true,
      fallbackLocale: 'es',
      redirectOn: 'root',
    },
  },

  typescript: {
    tsConfig: {
      include: ['../shared/**/*.ts'],
    },
  },

  alias: {
    '@scss': path.resolve(__dirname, 'app/assets/scss'),
  },
});
