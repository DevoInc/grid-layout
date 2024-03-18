import type { Layout } from '../../declarations';
import { sortLayout } from '../../layout';
import {
  getHighestItem,
  getUpElements,
  getInmediateElements,
} from '../../layout';

export const gravity = (layout: Layout) => {
  const sortedLayout = sortLayout(layout);
  sortedLayout.forEach((item, idx, arr) => {
    const elements = getInmediateElements(arr)(item, 'up');
    if (elements.length === 0 && item.y > 0) {
      const upperElement = getHighestItem(getUpElements(arr)(item));
      arr[idx].y = !upperElement ? 0 : upperElement.y + upperElement.h;
    }
  });
  return sortedLayout;
};
