import { AxiosResponse } from 'axios';
import { keysToCamelCase } from 'utils/keysToCamelCase';

export const responseInterceptor = <T, V>(response: AxiosResponse<T, V>) => ({
  ...response,
  data: keysToCamelCase(response.data),
}) as AxiosResponse<T, V>;
