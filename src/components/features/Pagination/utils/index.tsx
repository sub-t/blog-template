import { paginationOffset } from '../config';

export const getMaxPage = (postNum: number) =>
  Math.ceil(postNum / paginationOffset);
