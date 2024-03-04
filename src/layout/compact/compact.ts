import { constrain } from '../boundaries';
import { getElementsToMove, getLayoutCollisions } from '../collisions';
import type { Layout } from '../declarations';
import { removeItem, removeProp, sortLayout } from '../modification';
import { gravity } from './gravity';

export const compact = (layout: Layout, limits = { w: 12, h: Infinity }) => {
  let nextLayout = constrain(layout)(limits);

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
