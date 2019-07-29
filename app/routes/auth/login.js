import {
  postLoginHandler,
  getCarsByIdHandler,
} from './login-handler';

export const postLogin = (app) => {
  app.post('/auth/login/', postLoginHandler);
};

export const getCarsById = (app) => {
  app.get('/cars/:id/', getCarsByIdHandler);
};
