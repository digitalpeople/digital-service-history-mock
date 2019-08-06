import { postLoginHandler } from './login-handler';
import createToken from '../../utils/token';

jest.mock('../../utils/token', () => jest.fn(() => 'mock-token'));

describe('postLoginHandler', () => {
  it('should call reponse.send with token', async () => {
    expect.assertions(2);

    const request = {
      body: {
        username: 'test',
        password: '12345',
      },
    };
    const response = {
      send: jest.fn(),
    };

    await postLoginHandler(request, response);

    expect(response.send.mock.calls[0]).toMatchSnapshot();
    expect(createToken.mock.calls[0]).toMatchSnapshot();
  });

  it('should call reponse.sendStatus', async () => {
    expect.assertions(1);

    const request = {
      body: {
        username: 'test',
        password: 'invalid-password',
      },
    };
    const response = {
      sendStatus: jest.fn(),
    };

    await postLoginHandler(request, response);

    expect(response.sendStatus.mock.calls[0]).toMatchSnapshot();
  });
});
