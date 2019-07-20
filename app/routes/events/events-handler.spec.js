import {
  getEventsHandler,
  getEventsByIdHandler,
} from './events-handler';

import * as getJson from '../../utils/get-json';

describe('getEventsHandler', () => {
  it('should call getJson with correct path when request.params.id is 1', () => {
    expect.assertions(1);

    getJson.default = jest.fn();
    const request = {
      params: {
        id: '1',
      },
    };
    const response = {
      foo: 'bar',
    };

    getEventsHandler(request, response);

    expect(getJson.default.mock.calls[0]).toMatchSnapshot();
  });

  it('should call getJson with correct path when request.params.id is not 1', () => {
    expect.assertions(1);

    getJson.default = jest.fn();
    const request = {
      params: {
        id: '0',
      },
    };
    const response = {
      foo: 'bar',
    };

    getEventsHandler(request, response);

    expect(getJson.default.mock.calls[0]).toMatchSnapshot();
  });
});

describe('getEventsByIdHandler', () => {
  it('should call getJson with correct path', () => {
    expect.assertions(1);

    getJson.default = jest.fn();
    const request = {
      foo: 'baz',
    };
    const response = {
      foo: 'bar',
    };

    getEventsByIdHandler(request, response);

    expect(getJson.default.mock.calls[0]).toMatchSnapshot();
  });
});
