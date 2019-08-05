import { compare } from '../../utils/hash';
import createToken from '../../utils/token';
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
  const passwordMatch = await compare(password, await mockPassword);

  if (usernameMatch && passwordMatch) {
    const token = createToken({ username });

    response.send({
      token,
    });
  } else {
    response.sendStatus(401);
  }
};
