import { compare } from './hash';
import {
  mockUsername,
  mockPassword,
} from '../../data/mock-credentials';

const matchCredentials = async (username, password) => {
  const usernameMatch = username === mockUsername;
  const passwordMatch = await compare(password, await mockPassword);

  return usernameMatch && passwordMatch;
};

export default matchCredentials;
