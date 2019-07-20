import express from 'express';
import useRoutes from './routes/use-routes';

const app = express();

app.get('/', (request, response) => response.send('Digital service history mock.'));

useRoutes(app);

export default app;
