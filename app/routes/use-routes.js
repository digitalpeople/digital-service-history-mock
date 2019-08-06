import { getCars } from './cars/cars';
import { getEvents } from './events/events';
import { postLogin } from './auth/login';

const useRoutes = (app) => {
  getCars(app);
  getEvents(app);
  postLogin(app);
};

export default useRoutes;
