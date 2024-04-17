import type { TLayout, TLayoutItem } from '../declarations';
import { removeDuplicates } from '../layout';
import { areIntervalsOverlaped, getAABBFromRect } from '../math';

export const getSupportTree = (
  layout: TLayout,
  item: TLayoutItem,
): TLayoutItem[] => {
  const itemAABB = getAABBFromRect(item);

  return removeDuplicates(
    [item].concat(
      layout
        .filter(
          (nextItem) =>
            nextItem.y === itemAABB.y2 &&
            areIntervalsOverlaped(
              [itemAABB.x1, itemAABB.x2],
              [nextItem.x, nextItem.x + nextItem.w],
            ),
        )
        .reduce((prev, curr) => {
          return prev.concat([curr, ...getSupportTree(layout, curr)]);
        }, []),
    ),
  );
};
