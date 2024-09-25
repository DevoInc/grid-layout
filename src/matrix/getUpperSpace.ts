import type { TLayoutItem } from '../declarations';
import type { TMatrix } from './declarations';

export const getUpperSpace = (matrix: TMatrix, item: TLayoutItem) => {
  const left = item.x;
  const right = item.x + item.w;
  const line = Array.from({ length: right - left })
    .fill(null)
    .map((_, idx) => left + idx);
  for (let space = 1; space <= item.y; space++) {
    if (line.some((x) => matrix[item.y - space][x] !== null)) {
      return space - 1;
    }
  }
  return item.y;
};
