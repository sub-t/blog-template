import { CellType } from '../types/cell';

type Config = {
  count: number;
  page: number;
  siblingCount?: number;
  boundaryCount?: number;
};

const defaultConfig: Required<Config> = {
  count: -1,
  page: -1,
  siblingCount: 1,
  boundaryCount: 1,
};

export const getCells = (config: Config): CellType[] => {
  const { count, page, siblingCount, boundaryCount } = {
    ...defaultConfig,
    ...config,
  };

  // boundaryCount, ... , siblingCount
  const sideCount = boundaryCount + 1 + siblingCount;
  const collisionLeft = sideCount + 1 >= page;
  const collisionRight = count - sideCount <= page;
  const collisionBoth = collisionLeft && collisionRight;

  let cells;
  if (collisionBoth) {
    cells = range(1, count + 1);
  } else if (collisionLeft) {
    cells = [
      ...range(1, sideCount + 1 + siblingCount + 1),
      '...',
      ...range(count + 1 - boundaryCount, count + 1),
    ];
  } else if (collisionRight) {
    cells = [
      ...range(1, boundaryCount + 1),
      '...',
      ...range(count + 1 - (siblingCount + 1 + sideCount), count + 1),
    ];
  } else {
    cells = [
      ...range(1, 1 + boundaryCount),
      '...',
      ...range(page - siblingCount, page + siblingCount + 1),
      '...',
      ...range(count + 1 - boundaryCount, count + 1),
    ];
  }

  return ['<', ...(cells as CellType[]), '>'];
};

const range = (begin: number, end: number) =>
  Array.from({ length: end - begin }).map((_, idx) => begin + idx);
