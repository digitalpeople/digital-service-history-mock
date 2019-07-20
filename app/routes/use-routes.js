import { getCars } from './cars/cars';
import { getEvents } from './events/events';

const useRoutes = (app) => {
  getCars(app);
  getEvents(app);
};

export default useRoutes;
