import type { TLayout } from '../../declarations';
import { getLayoutCollisions, hasCollision } from '../../physics';
import { sortLayout } from '../../layout';
import { getSupportTree } from '../../tree';

export const resolveCollisions = (layout: TLayout, counter = 0): TLayout => {
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
      return {
        ...getSupportTree(layout, item).reduce(
          (prev2, item2) => ({
            ...prev2,
            [item2.i]: inc,
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
          y: item.y + incMap[item.i],
          priority: layout.length - counter,
        }
      : item,
  );

  return resolveCollisions(nextLayout, counter + 1);
};
