import express from 'express';
import bodyParser from 'body-parser';
import useRoutes from './routes/use-routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (request, response) => response.send('Digital service history mock.'));

useRoutes(app);

export default app;
