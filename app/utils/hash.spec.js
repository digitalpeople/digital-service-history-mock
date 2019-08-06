import bcrypt from 'bcrypt';
import {
  hash,
  compare,
} from './hash';

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

describe('hash', () => {
  it('should call bcrypt.hash with given parameters', () => {
    expect.assertions(1);

    const password = 'mock-password';

    hash(password);

    expect(bcrypt.hash.mock.calls[0]).toMatchSnapshot();
  });
});

describe('compare', () => {
  it('should call bcrypt.compare with given parameters', () => {
    expect.assertions(1);

    const password = 'mock-password';
    const targetPassword = 'stored-password';

    compare(password, targetPassword);

    expect(bcrypt.compare.mock.calls[0]).toMatchSnapshot();
  });
});
