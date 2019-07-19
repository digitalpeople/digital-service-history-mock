import {
  getCarsHandler,
  getCarsByIdHandler,
} from './cars-handler';

import * as getJson from '../../utils/get-json';

describe('getCarsHandler', () => {
  it('should call getJson with correct path', () => {
    expect.assertions(1);

    getJson.default = jest.fn();
    const request = {
      foo: 'baz',
    };
    const response = {
      foo: 'bar',
    };

    getCarsHandler(request, response);

    expect(getJson.default.mock.calls[0]).toMatchSnapshot();
  });
});

describe('getCarsByIdHandler', () => {
  it('should call getJson with correct path', () => {
    expect.assertions(1);

    getJson.default = jest.fn();
    const request = {
      foo: 'baz',
    };
    const response = {
      foo: 'bar',
    };

    getCarsByIdHandler(request, response);

    expect(getJson.default.mock.calls[0]).toMatchSnapshot();
  });
});
