import {
  getCarsHandler,
  getCarsByIdHandler,
} from './cars-handler';

export const getCars = (app) => {
  app.get('/cars/', getCarsHandler);
};

export const getCarsById = (app) => {
  app.get('/cars/:id/', getCarsByIdHandler);
};
