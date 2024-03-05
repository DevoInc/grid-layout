import type { Layout } from '../../declarations';
import { sortLayout } from '../modification';
import {
  getHighestElement,
  getUpElements,
  getUpInmediateElements,
} from '../traversing';

export const gravity = (layout: Layout) => {
  const sortedLayout = sortLayout(layout);
  sortedLayout.forEach((item, idx, arr) => {
    const elements = getUpInmediateElements(arr)(item);
    if (elements.length === 0 && item.y > 0) {
      const upperElement = getHighestElement(getUpElements(arr)(item));
      arr[idx].y = !upperElement ? 0 : upperElement.y + upperElement.h;
    }
  });
  return sortedLayout;
};
