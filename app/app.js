import express from 'express';
import getJson from './utils/get-json';
import isEqualParam from './utils/is-equal-param';

const app = express();

app.get('/', (request, response) => response.send('Mock service for car log application.'));

app.get('/cars/', (request, response) => {
  const path = 'data/cars.json';
  getJson(path, response);
});

app.get('/cars/:id/events', (request, response) => {
  const path = isEqualParam(request, 'id', '1') ? 'data/events.json' : null;
  getJson(path, response);
});

export default app;
