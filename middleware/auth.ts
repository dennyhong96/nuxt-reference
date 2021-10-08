import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ store, redirect }) => {
  if (!store.state.authenticated) {
    return redirect('/login');
  }
};

export default auth;
