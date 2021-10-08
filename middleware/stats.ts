import { Middleware } from '@nuxt/types';

const stats: Middleware = ({ route }) => {
  console.log('Stat Middleware:', route.fullPath);
};

export default stats;
