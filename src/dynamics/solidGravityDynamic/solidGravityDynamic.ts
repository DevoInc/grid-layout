import type { TLayout } from '../../declarations';
import { gravity } from '../../physics';
import { constrainLayout, removeProp, roundLayout } from '../../layout';
import { resolveCollisions } from './resolveCollisions';

export const solidGravityDynamic = (
  layout: TLayout,
  limits = { w: 12, h: Infinity },
) =>
  gravity(
    removeProp(
      resolveCollisions(
        constrainLayout(roundLayout(layout), {
          x1: 0,
          y1: 0,
          x2: limits.w,
          y2: limits.h,
        }),
      ),
      'priority',
    ),
  );
