import type { TAABB } from '../declarations';

export const areAABBOverlapped = (a: TAABB, b: TAABB) =>
  a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
