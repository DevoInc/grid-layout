import type { TLayout } from '../../declarations';
import type { THeightMap } from './declarations';

export const getHeightMap = (layout: TLayout, y: number): THeightMap =>
  layout.reduce((prev, curr) => {
    if (curr.y >= y) {
      if (prev[curr.y] !== undefined) {
        prev[curr.y].push(curr);
      } else {
        prev[curr.y] = [curr];
      }
    }
    return prev;
  }, {});
