import { type TRect, areAABBOverlapped, getAABBFromRect } from '../../math';

export const hasCollision = (a: TRect, b: TRect) =>
  areAABBOverlapped(getAABBFromRect(a), getAABBFromRect(b));
