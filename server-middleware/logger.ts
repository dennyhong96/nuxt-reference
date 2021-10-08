import { ServerMiddleware } from '@nuxt/types';

const logger: ServerMiddleware = (req, res, next) => {
  console.log(req.url);
  next();
};

export default logger;
