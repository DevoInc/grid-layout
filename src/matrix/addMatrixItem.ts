import type { TLayoutItem } from '../declarations';
import type { TMatrix } from './declarations';

export const addMatrixItem = (matrix: TMatrix, item: TLayoutItem) => {
  for (let x = item.x; x < item.x + item.w; x++) {
    for (let y = item.y; y < item.y + item.h; y++) {
      matrix[y][x] = item.i;
    }
  }
};
