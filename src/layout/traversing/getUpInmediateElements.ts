import { type Layout, type LayoutItem } from '../declarations';
import { areIntervalsOverlaped, getIntervalFromRect } from '../interval';
import { getRect } from '../rect';

export const getUpInmediateElements =
  (layout: Layout) => (layoutItem: LayoutItem) => {
    const rect = getRect(layoutItem);
    return layout.filter(
      (item) =>
        item.y + item.h === rect.y1 &&
        areIntervalsOverlaped(getIntervalFromRect(rect), {
          start: item.x,
          end: item.x + item.w,
        }),
    );
  };
