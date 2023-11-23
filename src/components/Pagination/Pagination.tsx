import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { makeLink } from 'utils/makeLink';

interface IProps {
  pageCount: number;
}

export const Pagination = memo(({ pageCount }: IProps) => {
  const { query, pathname } = useRouter();
  const pageNum = Number(query.page);

  if (Number.isNaN(pageNum)) return null;

  return (
    <div className='py-3 mt-10 flex justify-between'>
      {pageNum > 1 && (
        <Link
          className='border-solid p-1 px-5 rounded-2xl border-2 border-opacity-50 border-indigo-600'
          href={makeLink(pathname, { params: { page: pageNum - 1 } })}
        >
          {'<'}
        </Link>
      )}
      {pageNum !== pageCount && (
        <Link
          className='border-solid p-1 px-5 rounded-2xl border-2 border-opacity-50 border-indigo-600'
          href={makeLink(pathname, { params: { page: pageNum + 1 } })}
        >
          {'>'}
        </Link>
      )}
    </div>
  );
});

Pagination.displayName = 'Pagination';
