import type { Layout } from '../declarations';
import { constrainLayout } from '../layout';
import { getElementsToMove, getLayoutCollisions } from '../physics/collisions';
import { removeItem, removeProp, sortLayout } from '../layout';
import { gravity } from '../physics/gravity';

export const solidGravityDynamic = (
  layout: Layout,
  limits = { w: 12, h: Infinity },
) => {
  let nextLayout = constrainLayout(layout, {
    x1: 0,
    y1: 0,
    x2: limits.w,
    y2: limits.h,
  });

  let collisions = sortLayout(getLayoutCollisions(nextLayout));
  const maxIterations = collisions.length;
  for (let i = 0; i < maxIterations; i++) {
    const collide = collisions[0];
    const idxs = getElementsToMove(removeItem(nextLayout)(collide.i))(
      collide,
    ).map((item) => item.i);
    nextLayout = nextLayout.map((item) =>
      idxs.includes(item.i)
        ? { ...item, y: item.y + collide.y + collide.h }
        : item,
    );
    collisions = getLayoutCollisions(nextLayout); // Ordered by priority
    if (collisions.length === 0) {
      break;
    }
  }

  nextLayout = removeProp(nextLayout)('priority');

  return gravity(nextLayout);
};
