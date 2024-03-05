import type { Layout } from '../../declarations';

export const getHigherPoint = (layout: Layout) =>
  layout.reduce((prev, cur) => {
    const size = cur.y + cur.h;
    return size > prev ? size : prev;
  }, 0);
