import fs from 'fs';
import getJson from './get-json';

jest.mock('fs', () => ({
  readFile: jest.fn(),
}));
jest.mock('./response-handler', () => () => {});

describe('getJson', () => {
  it('should append response Content-Type', () => {
    expect.assertions(1);

    const path = './test.json';
    const response = {
      append: jest.fn(),
    };

    getJson(path, response);

    expect(response.append.mock.calls[0][0]).toMatchSnapshot();
  });

  it('should call fs.readFile', () => {
    expect.assertions(1);

    const path = './test.json';
    const response = {
      append: jest.fn(),
    };

    getJson(path, response);

    expect(fs.readFile.mock.calls[0][0]).toMatchSnapshot();
  });
});
