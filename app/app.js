import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import jwt from 'jsonwebtoken';
import useRoutes from './routes/use-routes';

const app = express();

// const checkToken = (req, res, next) => {
//   let token = req.headers['x-access-token'] || req.headers.authorization;
//   if (token.startsWith('Bearer ')) {
//     // Remove Bearer from string
//     token = token.slice(7, token.length);
//   }

//   if (token) {
//     jwt.verify(token, 'private key', (err, decoded) => {
//       if (err) {
//         return res.json({
//           success: false,
//           message: 'Token is not valid',
//         });
//       }
//       req.decoded = decoded;
//       // console.group(decoded);
//       next();
//     });
//   } else {
//     return res.json({
//       success: false,
//       message: 'Auth token is not supplied',
//     });
//   }
// };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
// app.use(checkToken);

app.get('/', (request, response) => response.send('Digital service history mock.'));

useRoutes(app);

export default app;
