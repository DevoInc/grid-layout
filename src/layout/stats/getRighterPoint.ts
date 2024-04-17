import type { TLayout } from '../../declarations';

export const getRighterPoint = (layout: TLayout) =>
  layout.reduce((prev, cur) => {
    const size = cur.x + cur.w;
    return size > prev ? size : prev;
  }, 0);
