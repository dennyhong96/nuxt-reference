export default {
  target: 'server', // default is 'server'

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fire',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/transition'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/vue-calender.ts',
      mode: 'client',
    },
    {
      src: '@/plugins/logger.ts',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://content.nuxtjs.org/installation
    '@nuxt/content',

    ['@/modules/example', { someOptions: true }],
  ],
  exampleOptions: {
    anotherOption: true,
    yetAnotherOption: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
  },

  serverMiddleware: [
    '@/server-middleware/logger',
    // { path: '/server-middleware', handler: '~/server-middleware/lambda' },
  ],

  router: {
    middleware: ['stats', 'user-agent'],
  },

  loading: '@/components/Loading.vue',

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  publicRuntimeConfig: {
    CUSTOM_VAR: 'customvar12345',
  },

  server: {
    timing: {
      total: true,
    },
  },

  telemetry: false,
};
