import bcrypt from 'bcrypt';
import getJson from '../../utils/get-json';

export const postLoginHandler = (request, response) => {
  bcrypt.hash(request.body.password, 10, (error, hash) => {
    let valid;
    bcrypt.compare('jelszo', hash, (err, res) => {
      valid = res;

      response.send({
        user: request.body.user,
        password: request.body.password,
        hash,
        valid,
      });
    });
  });

  // const path = 'data/cars.json';
  // getJson(path, response);
};

export const getCarsByIdHandler = (request, response) => {
  const path = 'data/cars-by-id.json';
  getJson(path, response);
};
