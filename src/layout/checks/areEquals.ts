import type { TLayout, TLayoutItem } from '../../declarations';

export const areLayoutItemEquals = (a: TLayoutItem, b: TLayoutItem) =>
  a.x === b.x &&
  a.y === b.y &&
  a.w === b.w &&
  a.h === b.h &&
  a.i === b.i &&
  a.priority === b.priority &&
  a.placeholder === b.placeholder;

export const areLayoutEquals = (a: TLayout, b: TLayout) =>
  a.length === b.length &&
  a.every((itemA, idx) => areLayoutItemEquals(itemA, b[idx]));
