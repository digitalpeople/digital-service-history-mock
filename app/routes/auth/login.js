import {
  postLoginHandler,
} from './login-handler';

export const postLogin = (app) => {
  app.post('/auth/login/', postLoginHandler);
};

export default postLogin;
