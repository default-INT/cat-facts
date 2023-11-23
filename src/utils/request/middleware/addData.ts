import type { AxiosRequestConfig } from 'axios';

const toUnderscoreCase = (key: string) => key.replace(/([A-Z])/g, '_$1').toLowerCase();

export const addData = (config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.data) return config;

  const getParams = Object.entries(config.data).map(item => {
    if (Array.isArray(item[1])) {
      const [key, value] = item;

      return value.map(i => `${toUnderscoreCase(key)}=${i}`).join('&');
    }

    return item.join('=');
  }).join('&');

  return {
    ...config,
    url: `${config.url}${getParams ? '?' : ''}${getParams}`,
  };
};
