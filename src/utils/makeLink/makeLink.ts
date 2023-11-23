export const makeLink = function (url: string, options?: { params?: Object, query?: Object }) {
  const mockedParams = url.split('/').filter(p => p.startsWith(':')).reduce((acc, p) => ({
    ...acc,
    [p.replace(/(\[|\]|:|\(.*\)|\?)/g, '')]: 1,
  }), {});

  const joinedParams = { ...mockedParams, ...(options?.params || {}) };

  return Object.entries(joinedParams).reduce(
    (baseUrl, [key, value]) => baseUrl.replace(new RegExp(`\\[${key}\\]`), String(value)),
    url,
  );
};
