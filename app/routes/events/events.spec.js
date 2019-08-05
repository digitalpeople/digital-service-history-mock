import {
  getEvents,
  getEventsById,
} from './events';

jest.mock('./events-handler', () => ({
  getEventsHandler: 'getEventsHandlerMockFunction',
  getEventsByIdHandler: 'getEventsByIdHandlerMockFunction',
}));

describe('getEvents', () => {
  it('should call app.get with correct path', () => {
    expect.assertions(1);

    const app = {
      get: jest.fn(),
    };

    getEvents(app);

    expect(app.get.mock.calls[0]).toMatchSnapshot();
  });
});

describe('getEventsById', () => {
  it('should call app.get with correct path', () => {
    expect.assertions(1);

    const app = {
      get: jest.fn(),
    };

    getEventsById(app);

    expect(app.get.mock.calls[0]).toMatchSnapshot();
  });
});
