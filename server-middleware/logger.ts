import { ServerMiddleware } from '@nuxt/types';

const logger: ServerMiddleware = (req, res, next) => {
  // @ts-ignore
  res.timing.start('midd', 'Middleware timing description');

  // server side operation..
  console.log(req.url);

  // @ts-ignore
  res.timing.end('midd');

  next();
};

export default logger;
