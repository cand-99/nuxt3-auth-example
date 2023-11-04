// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxt/devtools',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    globalAppMiddleware: true,
    provider: {
      type: 'authjs'
    }
  },
  colorMode: {
    preference: 'light'
  }
})
