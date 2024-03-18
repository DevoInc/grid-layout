import type { Layout, LayoutItem } from '../../declarations';
import { areAABBInProjection, getAABBFromRect } from '../../math';

export const getUpElements = (layout: Layout) => (layoutItem: LayoutItem) => {
  const a = getAABBFromRect(layoutItem);
  return layout.filter((item) =>
    areAABBInProjection(a, getAABBFromRect(item), 'up', false),
  );
};
