import type { Layout } from '../../declarations';
import { hasCollision } from './hasCollision';
import { removeItem } from '../../layout';

export const getLayoutCollisions = (layout: Layout) =>
  layout.filter((item1) =>
    removeItem(layout)(item1.i).some((item2) => hasCollision(item1, item2)),
  );
