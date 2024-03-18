import type { Direction, Layout, LayoutItem } from '../../declarations';
import { areAABBInProjection, getAABBFromRect } from '../../math';

export const getInmediateElements =
  (layout: Layout) => (layoutItem: LayoutItem, dir: Direction) => {
    const a = getAABBFromRect(layoutItem);
    return layout.filter((item) =>
      areAABBInProjection(a, getAABBFromRect(item), dir),
    );
  };
