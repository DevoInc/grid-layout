import type { Direction, Layout, LayoutItem } from '../../declarations';
import { areItemsAdjacent } from '../adjacency';

export const getInmediateElements =
  (layout: Layout) => (layoutItem: LayoutItem, dir: Direction) =>
    layout.filter((item) => areItemsAdjacent(layoutItem, item, dir));
