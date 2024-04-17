import type { TLayout } from '../../declarations';
import { type TAABB, constrainRect } from '../../math';

export const constrainLayout = (
  layout: TLayout,
  aabb: TAABB = { x1: 0, y1: 0, x2: 12, y2: Infinity },
) =>
  layout.map((item) => ({
    ...item,
    ...constrainRect(item, aabb),
  }));
