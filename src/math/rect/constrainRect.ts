import type { TAABB, TRect } from '../declarations';

export const constrainRect = (a: TRect, b: TAABB): TRect => {
  const x =
    a.x < b.x1 // is x outer of left boundary
      ? b.x1 // fix to the left bounday
      : a.x >= b.x2 // is x greater or equal than right boundary
        ? // set x to the minimal movement to the left to be in bound
          Math.max(b.x2 - a.w, b.x1)
        : // in other case x is in bound
          a.x;
  const y =
    a.y < b.y1 // is x outer of left boundary
      ? b.y1 // fix to the left bounday
      : a.y >= b.y2 // is x greater or equal than right boundary
        ? // set x to the minimal movement to the left to be in bound
          Math.max(b.y2 - a.y, b.y1)
        : // in other case x is in bound
          a.y;
  return {
    x,
    y,
    w: x + a.w > b.x2 ? b.x2 - x : a.w,
    h: y + a.h > b.y2 ? b.y2 - y : a.h,
  };
};
