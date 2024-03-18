import type { Layout, LayoutItem } from '../../declarations';
import { getRecursiveInmediateElements } from '../../layout';
import { removeDuplicates } from '../../layout';
import { getLayoutCollisionsWith } from './getLayoutCollisionsWith';

export const getElementsToMove =
  (layout: Layout) => (layoutItem: LayoutItem) => {
    const getRecursiveInmediateElementsThisLayout =
      getRecursiveInmediateElements(layout, 'down');
    return removeDuplicates(
      getLayoutCollisionsWith(layout)(layoutItem)
        .map((item) => [item, ...getRecursiveInmediateElementsThisLayout(item)])
        .flat(),
    );
  };
