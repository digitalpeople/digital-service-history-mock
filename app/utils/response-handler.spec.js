import responseHandler from './response-handler';

describe('responseHandler', () => {
  it('should handle if no error happens', () => {
    expect.assertions(1);

    const error = undefined;
    const data = {
      foo: 'bar',
    };
    const response = {
      send: jest.fn(),
      sendStatus: jest.fn(),
    };

    responseHandler(response)(error, data);

    expect(response.send.mock.calls[0][0]).toMatchSnapshot();
  });

  it('should handle if any error happens', () => {
    expect.assertions(1);

    const error = {
      message: 'error-message',
    };
    const data = {
      foo: 'bar',
    };
    const response = {
      send: jest.fn(),
      sendStatus: jest.fn(),
    };

    responseHandler(response)(error, data);

    expect(response.sendStatus.mock.calls[0][0]).toMatchSnapshot();
  });
});
