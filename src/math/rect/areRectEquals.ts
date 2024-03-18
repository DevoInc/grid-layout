import type { TRect } from '../declarations';

export const areRectEquals = (a: TRect, b: TRect) =>
  a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h;
