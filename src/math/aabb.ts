import type { TAABB, TRect } from './declarations';
import { areIntervalsOverlaped } from './interval';

export const getAABBFromRect = (rect: TRect): TAABB => ({
  x1: rect.x,
  y1: rect.y,
  x2: rect.x + rect.w,
  y2: rect.y + rect.h,
});

export const getRectFromAABB = (a: TAABB): TRect => ({
  x: a.x1,
  y: a.y1,
  w: a.x2 - a.x1,
  h: a.y2 - a.y1,
});

export const areAABBInProjection = (
  a: TAABB,
  b: TAABB,
  dir: 'up' | 'down' | 'left' | 'right',
  inmediate: boolean = true,
) => {
  const op = inmediate
    ? (a: number, b: number) => a === b
    : ['down', 'right']
      ? (a: number, b: number) => a >= b
      : (a: number, b: number) => a <= b;

  return dir === 'right'
    ? op(a.x2, b.x1) && areIntervalsOverlaped([a.y1, a.y2], [b.y1, b.y2])
    : dir === 'left'
      ? op(a.x1, b.x2) && areIntervalsOverlaped([a.y1, a.y2], [b.y1, b.y2])
      : dir === 'up'
        ? op(a.y1, b.y2) && areIntervalsOverlaped([a.x1, a.x2], [b.x1, b.x2])
        : dir === 'down'
          ? op(a.y2, b.y1) && areIntervalsOverlaped([a.x1, a.x2], [b.x1, b.x2])
          : false;
};
