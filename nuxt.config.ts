// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-svgo-loader'],

  typescript: {
    typeCheck: false,
    strict: true,
  },

  css: [
    '~/assets/scss/main.scss',
    '@fontsource/golos-text/400.css',
    '@fontsource/golos-text/500.css',
  ],

  runtimeConfig: {
    public: {
      apiBase: 'https://test-task-api.tapir.ws',
      pageLimit: 12,
    },
  },

  app: {
    head: {
      title: 'Tapir Test',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
