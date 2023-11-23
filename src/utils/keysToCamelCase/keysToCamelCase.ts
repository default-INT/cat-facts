import { isObject } from 'utils/isObject';

type TFormatterFn = (key: string) => string;

const toCamelCase = (key: string) => key
  .replace(/([-_][a-z0-9])/gi, c => c.toUpperCase().replace(/[-_]/g, ''));

export const keysToCamelCase = <T extends object>(obj: any,
  formatter: TFormatterFn = toCamelCase): T => {
  const mapArray = <V>(item: V) => keysToCamelCase(item);

  if (Array.isArray(obj)) return obj.map(mapArray) as T;
  if (!isObject(obj)) return obj as T;

  return Object
    .keys(obj).reduce((prev, curr) => {
      const camelCaseKey = formatter(curr);
      const value = obj[curr];
      if (Array.isArray(value)) return { ...prev, [camelCaseKey]: value.map(mapArray) };
      if (isObject(value)) return { ...prev, [camelCaseKey]: keysToCamelCase(value) };

      return { ...prev, [camelCaseKey]: value };
    }, {}) as T;
};
