import bcrypt from 'bcrypt';
import {
  hashPassword,
  comparePassword,
} from './password';

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

describe('hashPassword', () => {
  it('should call bcrypt.hash with given parameters', () => {
    expect.assertions(1);

    const password = 'mock-password';

    hashPassword(password);

    expect(bcrypt.hash.mock.calls[0][0]).toMatchSnapshot();
  });
});

describe('comparePassword', () => {
  it('should call bcrypt.compare with given parameters', () => {
    expect.assertions(1);

    const password = 'mock-password';
    const targetPassword = 'stored-password';

    comparePassword(password), targetPassword;

    expect(bcrypt.compare.mock.calls[0][0]).toMatchSnapshot();
  });
});
