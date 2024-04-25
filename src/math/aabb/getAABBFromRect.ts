import type { TAABB, TRect } from '../declarations';

export const getAABBFromRect = (rect: TRect): TAABB => ({
  x1: rect.x,
  y1: rect.y,
  x2: rect.x + rect.w,
  y2: rect.y + rect.h,
});
