import type { Layout, LayoutItem } from '../../declarations';

export const getHighestElement = (layout: Layout) => {
  const result = layout.reduce(
    (prev, curr) => (curr.y + curr.h > prev.y + prev.h ? curr : prev),
    { x: 0, y: 0, w: 0, h: 0, i: '' } as LayoutItem,
  );
  return result.i === '' ? undefined : result;
};
