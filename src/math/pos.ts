import type { TPos } from './declarations';

export const arePosEquals = (a: TPos, b: TPos) => a.x === b.x && a.y === b.y;
