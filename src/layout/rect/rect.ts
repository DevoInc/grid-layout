import { type LayoutItem } from '../declarations';

export type Rect = { x1: number; y1: number; x2: number; y2: number };

export const getRect = (item: LayoutItem): Rect => ({
  x1: item.x,
  y1: item.y,
  x2: item.x + item.w,
  y2: item.y + item.h,
});
