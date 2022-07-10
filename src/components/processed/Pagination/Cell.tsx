import Link from 'next/link';
import { baseStyles } from './styles/baseStyles';

type Props = {
  cell: string;
  page: number;
};

export const Cell: React.VFC<Props> = ({ cell, page }) => {
  return (
    <>
      {cell === '...' ? (
        <div className={baseStyles + ' w-auto px-1'}>{cell}</div>
      ) : (
        <Link key={cell} href={`/posts/page/${cell}`} passHref>
          <a
            className={`${baseStyles} ${
              cell === page.toString() ? 'bg-teal-700 text-white' : ''
            }`}
          >
            {cell}
          </a>
        </Link>
      )}
    </>
  );
};
