import '@next/types';

declare module 'vue/types/vue' {
  // this.$logger inside Vue components
  interface Vue {
    $logger(msg: string): void;
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$logger inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $logger(msg: string): void;
  }

  // nuxtContext.$logger
  interface Context {
    $logger(msg: string): void;
  }
}

declare module 'vuex/types/index' {
  // this.$logger inside Vuex stores
  interface Store<S> {
    $logger(msg: string): void;
  }
}
