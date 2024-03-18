import type { Layout, LayoutItem } from '../../declarations';

export const sortLayout = (layout: Layout): Layout =>
  [...layout].sort(sortByRowCol).sort(sortByPriority);

export const sortByRowCol = (a: LayoutItem, b: LayoutItem) =>
  a.y - b.y || a.x - b.x;

export const sortByPriority = (a: LayoutItem, b: LayoutItem) =>
  (b?.priority ?? 0) - (a?.priority ?? 0);
