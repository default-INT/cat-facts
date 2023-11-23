import { makeRequest } from '../makeRequest';

const axiosRequest = jest.fn();

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    request: axiosRequest,
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('make request', () => {
  const mockMiddleware = jest.fn(data => ({ ...data, method: 'GET' }));
  const request = makeRequest([mockMiddleware]);

  request();

  it('make request returns function', async () => {
    expect(makeRequest([mockMiddleware])).toBeInstanceOf(Function);
  });

  it('combine middleware', () => {
    expect(mockMiddleware).toHaveBeenCalled();
    expect(axiosRequest).toHaveBeenCalledWith({ method: 'GET' });
  });
});
