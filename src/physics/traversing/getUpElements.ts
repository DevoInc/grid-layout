import type { Layout, LayoutItem } from '../../declarations';
import { areItemsAdjacent } from '../adjacency';

export const getUpElements = (layout: Layout) => (layoutItem: LayoutItem) =>
  layout.filter((item) => areItemsAdjacent(layoutItem, item, 'up', false));
