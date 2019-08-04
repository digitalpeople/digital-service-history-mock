import jwt from 'jsonwebtoken';
import getJson from '../../utils/get-json';
import {
  comparePassword,
} from '../../utils/password';
import jwtKey from '../../../data/mock-jwt-key';
import {
  mockUsername,
  mockPassword,
} from '../../../data/mock-credentials';

export const postLoginHandler = async (request, response) => {
  const {
    username,
    password,
  } = request.body;

  const usernameMatch = username === mockUsername;
  const passwordMatch = await comparePassword(password, await mockPassword);

  if (usernameMatch && passwordMatch) {
    const token = jwt.sign(
      {
        username,
      },
      jwtKey,
      {
        expiresIn: '1h',
      },
    );

    response.send({
      token,
    });
  } else {
    response.sendStatus(401);
  }

  const token = jwt.sign(
    {
      userId: 1,
    },
    jwtKey,
    {
      expiresIn: '1h',
    },
  );

  response.send({
    token,
  });
};

export const getCarsByIdHandler = (request, response) => {
  const path = 'data/cars-by-id.json';
  getJson(path, response);
};
