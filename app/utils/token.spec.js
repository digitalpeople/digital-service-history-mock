import jwt from 'jsonwebtoken';
import createToken from './token';

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

describe('createToken', () => {
  it('should call jwt.sign', () => {
    expect.assertions(1);

    const content = {
      username: 'mock-username',
    };

    createToken(content);

    expect(jwt.sign.mock.calls[0]).toMatchSnapshot();
  });
});
