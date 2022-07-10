import { Link } from '@/components/material/Link';
import { ConditionalLink } from '@/components/material/Link/ConditionalLink';
import { CellType } from '../types/cell';
import { StyledCell } from './StyledCell';

type Props = {
  cell: CellType;
  page: number;
  count: number;
};

export const Cell: React.VFC<Props> = ({ cell, page, count }) => {
  switch (cell) {
    case '<':
      return (
        <ConditionalLink condition={page > 1} href={`/posts/page/${page - 1}`}>
          <StyledCell variant="arrow">{cell}</StyledCell>
        </ConditionalLink>
      );
    case '>':
      return (
        <ConditionalLink
          condition={page < count}
          href={`/posts/page/${page + 1}`}
        >
          <StyledCell variant="arrow">{cell}</StyledCell>
        </ConditionalLink>
      );
    case '...':
      return <StyledCell variant="ellipsis">{cell}</StyledCell>;
    default:
      return (
        <Link href={`/posts/page/${cell}`} passHref>
          <a>
            <StyledCell active={cell === page}>{cell}</StyledCell>
          </a>
        </Link>
      );
  }
};
