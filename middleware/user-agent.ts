import { Middleware } from '@nuxt/types';

// Called before renderring the page
const userAgent: Middleware = (context) => {
  context.$userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent;
};

export default userAgent;
