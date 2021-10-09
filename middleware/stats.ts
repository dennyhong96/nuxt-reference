import { Middleware } from '@nuxt/types';

// Called before renderring the page
const stats: Middleware = ({ route }) => {
  console.log('Stat Middleware:', route.fullPath);
};

export default stats;
