import express from 'express';
import getJson from './utils/get-json';
import isEqualParam from './utils/is-equal-param';
import useRoutes from './routes/use-routes';

const app = express();

app.get('/', (request, response) => response.send('Digital service history mock.'));

useRoutes(app);

app.get('/cars/:id/events', (request, response) => {
  const path = isEqualParam(request, 'id', '1') ? 'data/events.json' : null;
  getJson(path, response);
});

export default app;
