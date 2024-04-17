import type { TLayout, TLayoutItem } from '../../declarations';

export const sortLayout = (layout: TLayout): TLayout =>
  [...layout].sort(sortByRowCol).sort(sortByPriority);

export const sortByRowCol = (a: TLayoutItem, b: TLayoutItem) =>
  a.y - b.y || a.x - b.x;

export const sortByPriority = (a: TLayoutItem, b: TLayoutItem) =>
  (b?.priority ?? 0) - (a?.priority ?? 0);
