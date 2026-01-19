// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],

  app: {
    head: {
      title: 'Viral Happiness | Naarm/Melbourne Community',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Viral Happiness transforms public spaces in Naarm/Melbourne into vibrant, inclusive social hubs through pop-up events, fire performances, and community gatherings.',
        },
        { property: 'og:title', content: 'Viral Happiness | Naarm/Melbourne Community' },
        {
          property: 'og:description',
          content: 'Transforming public spaces into vibrant, inclusive social hubs.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#F97316' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
    ],
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
})
