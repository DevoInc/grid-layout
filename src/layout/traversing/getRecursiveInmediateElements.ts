import type { Direction, Layout, LayoutItem } from '../../declarations';
import { getInmediateElements } from './getInmediateElements';

export const getRecursiveInmediateElements =
  (layout: Layout, dir: Direction) => (item: LayoutItem) => {
    const inmediates = getInmediateElements(layout)(item, dir);
    return inmediates.length === 0
      ? []
      : inmediates
          .map((inmediateItem) => [
            inmediateItem,
            ...getRecursiveInmediateElements(layout, dir)(inmediateItem),
          ])
          .flat();
  };
