import getJson from '../../utils/get-json';
import isEqualParam from '../../utils/is-equal-param';

export const getEventsHandler = (request, response) => {
  const path = isEqualParam(request, 'id', '1') ? 'data/events.json' : null;
  getJson(path, response);
};

export const getEventsByIdHandler = (request, response) => {
  const path = 'data/events-by-id.json';
  getJson(path, response);
};
