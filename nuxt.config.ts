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
    },
  },

  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/i18n'],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'es',
    locales: [
      {
        code: 'en',
        language: 'en-GB',
        name: 'English',
        files: [
          'en.json',
          'pages/index/en.json',
          'layout/public/en.json',
          'pages/privacy/en.json',
        ],
      },
      {
        code: 'es',
        language: 'es-ES',
        name: 'Español',
        files: [
          'es.json',
          'pages/index/es.json',
          'layout/public/es.json',
          'pages/privacy/es.json',
        ],
      },
    ],
    restructureDir: '.',
    langDir: 'app/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      cookieSecure: true,
      fallbackLocale: 'en',
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
