import type { Layout, LayoutItem } from '../../declarations';
import { areIntervalsOverlaped, getIntervalFromRect } from '../interval';
import { getRect } from '../rect';

export const getUpElements = (layout: Layout) => (layoutItem: LayoutItem) => {
  const rect = getRect(layoutItem);
  return layout.filter(
    (item) =>
      item.y + item.h <= rect.y1 &&
      areIntervalsOverlaped(getIntervalFromRect(rect), {
        start: item.x,
        end: item.x + item.w,
      }),
  );
};
