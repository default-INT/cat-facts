export const isObject = <T>(obj: T) => {
  if (!obj) return false;
  if (Array.isArray(obj)) return false;

  return typeof obj === 'object';
};
