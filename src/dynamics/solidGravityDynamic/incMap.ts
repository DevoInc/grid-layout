import type { TLayout, TLayoutItem } from '../../declarations';
import { getHeightMap, getSupportList, hasCollision } from '../../physics';

export const getIncMap = (
  layout: TLayout,
  collide: TLayoutItem,
  branchPriority: number,
) => {
  let nextBranchPriority = branchPriority;
  const incMap = layout
    .filter((item) => item.i !== collide.i && hasCollision(item, collide))
    .reduce((prev, item) => {
      const inc = collide.y + collide.h - item.y;
      const priority = item.priority ? item.priority : nextBranchPriority--;
      const heightMap = getHeightMap(layout, item.y + item.h);
      return {
        ...getSupportList(heightMap, item)
          .filter((it) => it.priority === undefined || it.priority <= priority)
          .reduce(
            (prev2, item2) => ({
              ...prev2,
              [item2.i]: { inc, priority },
            }),
            {},
          ),
        ...prev,
      };
    }, {});
  return { incMap, nextBranchPriority };
};
