import { makeLink } from '../makeLink';

describe('Make link function', () => {
  it('should return simple url', () => {
    const url = '/facts';
    expect(makeLink(url)).toBe(url);
  });

  it('should return url with params', () => {
    const url = '/app/[factId]/[pageNum]';
    const extected = '/app/42/1';
    expect(makeLink(url, { params: { factId: 42, pageNum: 1 } })).toBe(extected);
  });
});
