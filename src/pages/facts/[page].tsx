import { api } from 'api';
import { GetServerSideProps } from 'next';
import { Pagination } from 'components/Pagination';
import { FactList } from 'components/FactList';
import { queryClient } from 'utils/queryClient';

interface IProps {
  pageCount: number;
}

const Facts = ({ pageCount }: IProps) => (
  <>
    <FactList />
    <Pagination pageCount={pageCount} />
  </>
);

export const getServerSideProps = (async () => {
  const { lastPage } = await queryClient.fetchQuery({
    queryKey: ['getFacts'],
    queryFn: () => api.facts(),
    cacheTime: 10000,
  });

  return {
    props: {
      pageCount: lastPage,
    },
  };
}) satisfies GetServerSideProps<IProps>;

export default Facts;
