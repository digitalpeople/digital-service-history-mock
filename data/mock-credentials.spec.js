import {
  mockUsername,
  mockPassword,
} from './mock-credentials';

jest.mock('../app/utils/hash', () => ({
  hash: jest.fn(value => `mock-hash-${value}`),
}));

describe('mockUsername', () => {
  it('should return mock value', () => {
    expect.assertions(1);

    const actual = mockUsername;

    expect(actual).toMatchSnapshot();
  });
});

describe('mockPassword', () => {
  it('should return mock value', () => {
    expect.assertions(1);

    const actual = mockPassword;

    expect(actual).toMatchSnapshot();
  });
});
