import type { LayoutItem } from '../../declarations';
import { areIntervalsOverlaped } from '../interval';
import { getRect } from '../rect';

export const areItemsAdjacent = (
  a: LayoutItem,
  b: LayoutItem,
  dir: 'up' | 'down' | 'left' | 'right',
  inmediate: boolean = true,
) => {
  const ar = getRect(a);
  const br = getRect(b);

  const op = inmediate
    ? (a: number, b: number) => a === b
    : ['down', 'right']
      ? (a: number, b: number) => a >= b
      : (a: number, b: number) => a <= b;

  return dir === 'right'
    ? op(ar.x2, br.x1) && areIntervalsOverlaped([ar.y1, ar.y2], [br.y1, br.y2])
    : dir === 'left'
      ? op(ar.x1, br.x2) &&
        areIntervalsOverlaped([ar.y1, ar.y2], [br.y1, br.y2])
      : dir === 'up'
        ? op(ar.y1, br.y2) &&
          areIntervalsOverlaped([ar.x1, ar.x2], [br.x1, br.x2])
        : dir === 'down'
          ? op(ar.y2, br.y1) &&
            areIntervalsOverlaped([ar.x1, ar.x2], [br.x1, br.x2])
          : false;
};
