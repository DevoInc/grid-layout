import type { TLayout } from '../../declarations';
import { hasCollision } from './hasCollision';

export const getLayoutCollisions = (layout: TLayout) =>
  layout.filter((item1) =>
    layout.some((item2) => item1.i !== item2.i && hasCollision(item1, item2)),
  );
