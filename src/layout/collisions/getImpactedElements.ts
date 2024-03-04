import { hasCollision } from './hasCollision';
import type { Layout, LayoutItem } from '../declarations';

// Always after apply gravity
export const getImpactedElements =
  (layout: Layout) => (layoutItem: LayoutItem) =>
    layout.filter((item) => hasCollision(item, layoutItem));
