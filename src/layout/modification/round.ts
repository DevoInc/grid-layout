import type { TLayout } from '../../declarations';

export const roundLayout = (layout: TLayout) =>
  layout.map((item) => ({
    ...item,
    x: Math.round(item.x),
    y: Math.round(item.y),
    w: Math.round(item.w),
    h: Math.round(item.h),
  }));
