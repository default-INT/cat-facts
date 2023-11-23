import { makeRequest } from './utils/makeRequest';
import { addGetMethod } from './middleware/addGetMethod';
import { addData } from './middleware/addData';

export const request = {
  get: makeRequest([addGetMethod, addData]),
};
