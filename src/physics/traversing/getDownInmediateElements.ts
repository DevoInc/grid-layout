import type { Layout, LayoutItem } from '../../declarations';
import { areIntervalsOverlaped, getIntervalFromRect } from '../interval';
import { getRect } from '../rect';

// Always after apply gravity
export const getDownInmediateElements =
  (layout: Layout) => (layoutItem: LayoutItem) => {
    const rect = getRect(layoutItem);
    return layout.filter(
      (item) =>
        item.y === rect.y2 &&
        areIntervalsOverlaped(getIntervalFromRect(rect), {
          start: item.x,
          end: item.x + item.w,
        }),
    );
  };
