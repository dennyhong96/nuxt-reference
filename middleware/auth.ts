import { Middleware } from '@nuxt/types';

// Called before renderring the page
const auth: Middleware = ({ store, redirect }) => {
  if (!store.state.authenticated) {
    return redirect('/login');
  }
};

export default auth;
