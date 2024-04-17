import type { TLayout } from '../../declarations';
import { getLayoutCollisions, hasCollision } from '../../physics';
import { sortLayout } from '../../layout';
import { getSupportTree } from '../../tree';

export const resolveCollisions = (
  layout: TLayout,
  counter = 0,
  branchPriority = layout.length,
): TLayout => {
  // Safety limit for uncontrolled situations
  if (counter > layout.length) {
    // eslint-disable-next-line no-console
    console.error('Algorythm "solidGravityDynamic" exhaust layout elements.');
    return layout;
  }

  const collisions = sortLayout(getLayoutCollisions(layout));
  if (collisions.length === 0) {
    return layout;
  }

  const collide = collisions[0];
  const incMap = sortLayout(layout)
    .filter((item) => item.i !== collide.i && hasCollision(item, collide))
    .reduce((prev, item) => {
      const inc = collide.y + collide.h - item.y;
      const priority = item.priority ? item.priority : branchPriority--;
      return {
        ...getSupportTree(layout, item).reduce(
          (prev2, item2) => ({
            ...prev2,
            [item2.i]: { inc, priority },
          }),
          {},
        ),
        ...prev,
      };
    }, {});

  const nextLayout = layout.map((item) =>
    incMap[item.i] !== undefined
      ? {
          ...item,
          y: item.y + incMap[item.i].inc,
          priority: incMap[item.i].priority,
        }
      : item,
  );

  return resolveCollisions(nextLayout, counter + 1, branchPriority);
};
