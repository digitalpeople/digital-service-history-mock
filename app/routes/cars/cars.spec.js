import {
  getCars,
  getCarsById,
} from './cars';

jest.mock('./cars-handler', () => ({
  getCarsHandler: 'getCarsHandlerMockFunction',
  getCarsByIdHandler: 'getCarsByIdHandlerMockFunction',
}));

describe('getCars', () => {
  it('should app.get with correct path', () => {
    expect.assertions(1);

    const app = {
      get: jest.fn(),
    };

    getCars(app);

    expect(app.get.mock.calls[0]).toMatchSnapshot();
  });
});

describe('getCarsById', () => {
  it('should app.get with correct path', () => {
    expect.assertions(1);

    const app = {
      get: jest.fn(),
    };

    getCarsById(app);

    expect(app.get.mock.calls[0]).toMatchSnapshot();
  });
});
