import axios from 'axios';
import { responseInterceptor } from './responseInterceptor';
import type { AxiosPromise, AxiosRequestConfig } from 'axios';

type TMiddleware = (config: AxiosRequestConfig) => AxiosRequestConfig;

export const makeRequest = (middlewares: TMiddleware[]) => {
  const instance = axios.create();

  // init interceptors for token check or smt else
  instance.interceptors.response.use(responseInterceptor);

  return <TResponse>(config: AxiosRequestConfig = {}): AxiosPromise<TResponse> => {
    const params: AxiosRequestConfig = middlewares.reduce(
      (acc, middlewareFn) => middlewareFn(acc),
      config,
    );

    return instance.request(params);
  };
};
