import type { Layout } from '../declarations';

export const constrain =
  (layout: Layout) =>
  (limits = { w: 12, h: Infinity }) =>
    layout.map((item) => {
      const x =
        item.x < 0
          ? 0
          : item.x + item.w > limits.w
            ? Math.max(0, Math.min(limits.w - item.x, limits.w - 1))
            : item.x;
      const y =
        item.y < 0
          ? 0
          : item.y + item.h > limits.h
            ? limits.h - item.y
            : item.y;
      return {
        ...item,
        x,
        y,
        w: x + item.w > limits.w ? limits.w - x : item.w,
        h: y + item.h > limits.h ? limits.h - y : item.h,
      };
    });
