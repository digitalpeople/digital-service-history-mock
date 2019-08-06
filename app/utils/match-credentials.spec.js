import matchCredentials from './match-credentials';
import { compare } from './hash';

jest.mock('./hash', () => ({
  compare: jest.fn(() => true),
}));

jest.mock('../../data/mock-credentials', () => ({
  mockUsername: 'test',
  mockPassword: 'mock-password',
}));

describe('matchCredentials', () => {
  it('should return true when credentials match to mocks', async () => {
    expect.assertions(1);

    const username = 'test';
    const password = 'mock-password';

    const actual = await matchCredentials(username, password);

    expect(actual).toMatchSnapshot();
  });

  it('should return false when credentials don\'t match to mocks', async () => {
    expect.assertions(1);

    const username = 'invalid-username';
    const password = 'mock-password';

    const actual = await matchCredentials(username, password);

    expect(actual).toMatchSnapshot();
  });

  it('should call compare with password parameter', async () => {
    expect.assertions(1);

    const username = 'test';
    const password = 'invalid-password';

    await matchCredentials(username, password);

    expect(compare.mock.calls[0]).toMatchSnapshot();
  });
});
