import {
  getEventsHandler,
  getEventsByIdHandler,
} from './events-handler';

export const getEvents = (app) => {
  app.get('/cars/:id/events', getEventsHandler);
};

export const getEventsById = (app) => {
  app.get('/cars/:id/events/:eventId', getEventsByIdHandler);
};
