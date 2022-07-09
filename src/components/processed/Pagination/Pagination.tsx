import Link from 'next/link';
import { getCells } from './getCells';

type Props = {
  maxPage: number;
  currentPage: number;
};

export const Pagination: React.VFC<Props> = ({ maxPage, currentPage }) => {
  const cells = getCells({
    count: maxPage,
    page: currentPage,
    siblingCount: 1,
    boundaryCount: 0,
  });

  return (
    <div className="center">
      <div className="flex gap-2 px-3">
        <div className="center w-10 h-10 rounded-full text-lg font-black text-accent-1">
          {'<'}
        </div>
        {cells.map((cell) => (
          <Link key={cell} href={`/posts/page/${cell}`} passHref>
            <a
              className={`center w-10 h-10 rounded-full text-lg ${
                cell === currentPage.toString()
                  ? 'bg-teal-700 text-white'
                  : 'text-accent-1'
              }`}
            >
              {cell}
            </a>
          </Link>
        ))}
        <a className="center w-10 h-10 rounded-full text-lg font-black text-accent-1">
          {'>'}
        </a>
      </div>
    </div>
  );
};
