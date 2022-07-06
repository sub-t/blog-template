export const paginationOffset = 2;
export const getMaxPage = (postNum: number) =>
  Math.ceil(postNum / paginationOffset);
