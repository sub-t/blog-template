import Link from 'next/link';
import { baseStyles } from './styles/baseStyles';

type Props = {
  isEnd: boolean;
  page: number;
};

export const RightArrow: React.VFC<Props> = ({ isEnd, page }) => (
  <>
    {isEnd ? (
      <div className={baseStyles}>{'>'}</div>
    ) : (
      <Link href={`/posts/page/${page + 1}`}>
        <a className={baseStyles}>{'>'}</a>
      </Link>
    )}
  </>
);

export const LeftArrow: React.VFC<Props> = ({ isEnd, page }) => (
  <>
    {isEnd ? (
      <div className={baseStyles}>{'<'}</div>
    ) : (
      <Link href={`/posts/page/${page - 1}`}>
        <a className={baseStyles}>{'<'}</a>
      </Link>
    )}
  </>
);
