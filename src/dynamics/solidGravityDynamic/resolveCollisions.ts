import type { TLayout } from '../../declarations';
import { getLayoutCollisions } from '../../physics';
import { sortLayout } from '../../layout';
import { getIncMap } from './incMap';

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
  const { incMap, nextBranchPriority } = getIncMap(
    sortLayout(layout),
    collide,
    branchPriority,
  );

  const nextLayout = layout.map((item) =>
    incMap[item.i] !== undefined
      ? {
          ...item,
          y: item.y + incMap[item.i].inc,
          priority: incMap[item.i].priority,
        }
      : item,
  );

  return resolveCollisions(nextLayout, counter + 1, nextBranchPriority);
};
