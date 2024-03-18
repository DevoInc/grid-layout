import type { LayoutItem } from '../../declarations';
import { getAABBFromRect } from '../../math';

export const hasCollision = (item1: LayoutItem, item2: LayoutItem) => {
  const r1 = getAABBFromRect(item1);
  const r2 = getAABBFromRect(item2);
  return r1.x1 < r2.x2 && r1.x2 > r2.x1 && r1.y1 < r2.y2 && r1.y2 > r2.y1;
};
