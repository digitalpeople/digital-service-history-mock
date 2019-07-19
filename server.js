import cors from 'cors';
import app from './app/app';

const port = 9000;
app.use(cors());

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Digital service history mock is listening on port ${port}!`));
