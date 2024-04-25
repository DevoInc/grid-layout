import type { TLayout } from '../../declarations';

export const scaleLayout = (
  layout: TLayout,
  xFactor: number,
  yFactor: number,
) =>
  layout.map((item) => ({
    ...item,
    x: item.x * xFactor,
    y: item.y * yFactor,
    w: item.w * xFactor,
    h: item.h * yFactor,
  }));
