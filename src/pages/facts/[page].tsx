import { api } from 'api';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Pagination } from 'components/Pagination';
import { FactList } from 'components/FactList';
import { TGetFacts } from 'api/types';

interface IProps {
  pageCount: number;
  initialDate: TGetFacts
}

const Facts = ({ pageCount, initialDate }: IProps) => (
  <>
    <FactList initialData={initialDate} />
    <Pagination pageCount={pageCount} />
  </>
);

export const getStaticPaths = (async () => {
  const { lastPage } = await api.facts();

  return {
    paths: Array.from({ length: lastPage }, (_, i) => ({
      params: {
        page: String(i + 1),
      },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const page = Number(params?.page) || 1;
  const initialDate = await api.facts({ page });
  const { lastPage } = initialDate;

  return {
    props: {
      pageCount: lastPage,
      initialDate,
    },
    revalidate: 10000,
  };
}) satisfies GetStaticProps<IProps>;

export default Facts;
