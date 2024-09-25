import type { TLayout } from '../declarations';
import { getHigherPoint, getRighterPoint } from '../layout';

export const getMatrixFromLayout = (layout: TLayout) => {
  const highestPoint = getHigherPoint(layout);
  const righterPoint = getRighterPoint(layout);
  const matrix = Array.from({ length: highestPoint })
    .fill(null)
    .map(() => Array.from({ length: righterPoint }).fill(null));
  layout.forEach((item) => {
    for (let x = item.x; x < item.x + item.w; x++) {
      for (let y = item.y; y < item.y + item.h; y++) {
        matrix[y][x] = item.i;
      }
    }
  });
  return matrix;
};
