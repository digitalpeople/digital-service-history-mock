import matchCredentials from '../../utils/match-credentials';
import createToken from '../../utils/token';

export const postLoginHandler = async (request, response) => {
  const {
    username,
    password,
  } = request.body;

  if (await matchCredentials(username, password)) {
    const token = createToken({ username });

    response.send({ token });
  } else {
    response.sendStatus(401);
  }
};

export default postLoginHandler;
