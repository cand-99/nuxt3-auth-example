// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET
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
  }
})
