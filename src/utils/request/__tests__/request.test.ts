import { request } from '../request';

const data = {
  user: 'John',
};

const config = {
  url: '/api/',
};

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    request: () => Promise.resolve(data),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  })),
}));

describe('make request', () => {
  it('make get request', async () => {
    await expect(request.get(config)).resolves.toEqual(data);
  });
});
