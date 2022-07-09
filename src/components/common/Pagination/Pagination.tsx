import Link from 'next/link';

type Props = {
  maxPage: number;
  currentPage: number;
};
// TODO
export const Pagination: React.VFC<Props> = ({ maxPage, currentPage }) => {
  return (
    <div className="flex gap-4 px-3">
      {currentPage !== 1 && (
        <Link href={`/posts/page/${currentPage - 1}`}>
          <a> Previous</a>
        </Link>
      )}
      {currentPage !== maxPage && (
        <Link href={`/posts/page/${currentPage + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
  );
};
