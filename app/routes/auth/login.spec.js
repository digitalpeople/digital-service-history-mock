import {
  postLogin,
} from './login';

jest.mock('./login-handler', () => ({
  postLoginHandler: 'postLoginHandlerMockFunction',
}));

describe('postLogin', () => {
  it('should call app.post with correct path', () => {
    expect.assertions(1);

    const app = {
      post: jest.fn(),
    };

    postLogin(app);

    expect(app.post.mock.calls[0]).toMatchSnapshot();
  });
});
