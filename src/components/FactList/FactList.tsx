import { useQuery } from 'react-query';
import { api } from 'api';
import { useRouter } from 'next/router';
import { TGetFacts } from 'api/types';

interface IProps {
  initialData: TGetFacts
}

export const FactList = ({ initialData }: IProps) => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const { data: response, isLoading, isError } = useQuery(
    ['getFacts', page],
    () => api.facts({ page }),
    {
      initialData,
    },
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div>
      {response?.data.map(item => (
        <div
          className='py-3 border-solid border-b-2 border-opacity-20 border-indigo-600 '
          key={item.length}
        >
          {item.fact}
        </div>
      ))}
    </div>
  );
};
