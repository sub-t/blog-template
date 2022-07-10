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

export const getCells = (config: Config) => {
  const { count, page, siblingCount, boundaryCount } = {
    ...defaultConfig,
    ...config,
  };

  // boundaryCount, ... , siblingCount
  const sideCount = boundaryCount + 1 + siblingCount;
  const collisionLeft = sideCount + 1 >= page;
  const collisionRight = count - sideCount <= page;
  const collisionBoth = collisionLeft && collisionRight;

  if (collisionBoth) {
    return range(1, count + 1);
  }
  if (collisionLeft) {
    return [
      ...range(1, sideCount + 1 + siblingCount + 1),
      '...',
      ...range(count + 1 - boundaryCount, count + 1),
    ];
  }
  if (collisionRight) {
    return [
      ...range(1, boundaryCount + 1),
      '...',
      ...range(count + 1 - (siblingCount + 1 + sideCount), count + 1),
    ];
  }
  return [
    ...range(1, 1 + boundaryCount),
    '...',
    ...range(page - siblingCount, page + siblingCount + 1),
    '...',
    ...range(count + 1 - boundaryCount, count + 1),
  ];
};

const range = (begin: number, end: number) =>
  Array.from({ length: end - begin }).map((_, idx) => (begin + idx).toString());
