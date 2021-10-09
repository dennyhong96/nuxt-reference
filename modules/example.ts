import { Module } from '@nuxt/types';
import { ModuleThis } from '@nuxt/types/config/module';

// Async Modules Example
const ExampleModule: Module = async function (this: ModuleThis, moduleOptions) {
  const options = { ...moduleOptions, ...this.options.exampleOptions };
  console.log('ExampleModule Options: ', options);

  // Add a CSS Library
  if (
    moduleOptions.fontAwesome !== false &&
    !this.options.css.includes('font-awesome/css/font-awesome.css')
  ) {
    this.options.css.push('font-awesome/css/font-awesome.css');
  }

  // Emit assets - register webpack plugins to emit assets during build.
  const info = 'Built by awesome module - 1.3 alpha on ' + Date.now();
  this.options.build.plugins!.push({
    apply(compiler) {
      compiler.plugin('emit', (compilation, cb) => {
        // This will generate `.nuxt/dist/info.txt' with contents of info variable.
        // Source can be buffer too
        compilation.assets['info.txt'] = {
          source: () => info,
          size: () => info.length,
        };
        cb();
      });
    },
  });

  this.nuxt.hook('ready', async (nuxt: any) => {
    // Ready : Nuxt is ready to work (ModuleContainer and Renderer ready).
  });

  this.nuxt.hook('error', async (error: any) => {
    // Error: An unhandled error when calling hooks.
  });

  this.nuxt.hook('close', async (nuxt: any) => {
    // Close: Nuxt instance is gracefully closing.
  });

  this.nuxt.hook(
    'listen',
    async (server: any, { host, port }: { host: any; port: any }) => {
      // Listen: Nuxt internal server starts listening. (Using nuxt start or nuxt dev)
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2500));
};

export default ExampleModule;
