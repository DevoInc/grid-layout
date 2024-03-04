import type { Layout, LayoutItem } from '../declarations';
import { getDownRecursiveInmediateElements } from '../traversing';
import { getImpactedElements } from './getImpactedElements';
import { removeDuplicates } from '../modification';

export const getElementsToMove =
  (layout: Layout) => (layoutItem: LayoutItem) => {
    const result = removeDuplicates(
      getImpactedElements(layout)(layoutItem)
        .map((item) => [
          item,
          ...getDownRecursiveInmediateElements(layout, item),
        ])
        .flat(),
    );
    return result;
  };
