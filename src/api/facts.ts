import { request } from 'utils/request/request';
import { GetFacts, TGetFacts } from 'api/types';

interface IGetFactsRequest {
  page?: number
}

export const facts = async (params: IGetFactsRequest) => {
  const response = await request.get<TGetFacts>({
    url: 'https://catfact.ninja/facts',
    params,
  });

  return GetFacts.parse(response.data);
};
