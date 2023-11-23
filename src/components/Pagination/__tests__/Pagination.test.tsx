import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Pagination } from 'components/Pagination';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/facts/[page]',
    query: {
      page: 5,
    },
  }),
}));

describe('tests for Pagination', () => {
  it('should match snapshot', () => {
    const { container } = render(<Pagination pageCount={20} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should check href', () => {
    const { container } = render(<Pagination pageCount={20} />);
    const [goPrevPage, ...allLink] = Array.from(container.querySelectorAll('a'));
    const goNextPage = allLink.pop();

    expect(goPrevPage).toBeInTheDocument();
    expect(goPrevPage).toHaveAttribute('href', '/facts/4');
    expect(goNextPage).toBeInTheDocument();
    expect(goNextPage).toHaveAttribute('href', '/facts/6');
  });

  it('should render count links', () => {
    const { container } = render(<Pagination pageCount={5} />);
    const arrows = Array.from(container.querySelectorAll('a'));

    expect(arrows.length).toEqual(4);
  });
});
