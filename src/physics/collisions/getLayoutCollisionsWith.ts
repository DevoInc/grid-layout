import type { Layout, LayoutItem } from '../../declarations';
import { hasCollision } from './hasCollision';
import { removeItem } from '../modification';

export const getLayoutCollisionsWith =
  (layout: Layout) => (layoutItem: LayoutItem) =>
    removeItem(layout)(layoutItem.i).filter((item) =>
      hasCollision(item, layoutItem),
    );
