// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Juan R. Loaiza - Links",
      link: [{
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/logo.png"
      }]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
})