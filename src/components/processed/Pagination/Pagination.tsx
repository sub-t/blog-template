import { LeftArrow, RightArrow } from './Arrow';
import { Cell } from './Cell';
import { getCells } from './utils/getCells';

type Props = {
  count: number;
  page: number;
  siblingCount?: number;
  boundaryCount?: number;
};

export const Pagination: React.VFC<Props> = (props) => {
  const cells = getCells(props);
  const { page, count } = props;

  return (
    <div className="overflow-x-auto w-full center">
      <div className="flex gap-1 px-4">
        <LeftArrow isEnd={page === 1} page={page} />
        {cells.map((cell) => (
          <Cell key={cell} cell={cell} page={page} />
        ))}
        <RightArrow isEnd={page === count} page={page} />
      </div>
    </div>
  );
};
