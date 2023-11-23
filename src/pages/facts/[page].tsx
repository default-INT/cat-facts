import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { api } from 'api';
import { Pagination } from 'components/Pagination';

const Facts = () => {
  const { query } = useRouter();

  const { data: response, isError } = useQuery({
    queryKey: ['getFacts'],
    queryFn: () => api.facts({ page: Number(query.page) }),
  });

  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
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
      <Pagination pageCount={response?.lastPage || 1} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = (async ({ params }) => {
  const page = Number(params?.page || 1);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getFacts'], {
    queryFn: () => api.facts({ page }),
  });

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
});

export default Facts;
