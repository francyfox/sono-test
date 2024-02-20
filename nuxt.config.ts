// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      download: true,
      'JetBrains+Mono': true,
    }],
    ['@pinia/nuxt', { storesDirs: ['./stores/**'], }],
    ['nuxt-icon', {
      size: '24px', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
    }],
    ['@unocss/nuxt', {}]
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'autoprefixer': {}
    }
  },
  alias: {
    '#/': "./",
    '#module': './module/',
    '#pages/': './pages/'
  }
})
