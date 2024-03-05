import type { Layout, LayoutItem } from '../../declarations';
import { getDownInmediateElements } from './getDownInmediateElements';

export const getDownRecursiveInmediateElements = (
  layout: Layout,
  item: LayoutItem,
) => {
  const inmediates = getDownInmediateElements(layout)(item);
  return inmediates.length === 0
    ? []
    : inmediates
        .map((x) => [x, ...getDownRecursiveInmediateElements(layout, x).flat()])
        .flat();
};
