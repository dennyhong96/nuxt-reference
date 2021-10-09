import { Plugin } from '@nuxt/types';

const logger: Plugin = ({ app }, inject) => {
  // // Inject $logger(msg) in Vue, context and store.
  inject('logger', (msg: string) => console.log(`From $logger - ${msg}`));
};

export default logger;
