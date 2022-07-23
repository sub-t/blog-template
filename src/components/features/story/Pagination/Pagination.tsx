import { Cell } from './Cell/Cell';
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
        {cells.map((cell, idx) => (
          <Cell key={idx} cell={cell} page={page} count={count} />
        ))}
      </div>
    </div>
  );
};
