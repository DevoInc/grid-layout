import { describe, expect, test } from 'vitest';

import { resolveCollisions } from './resolveCollisions';
import type { TLayout } from '../../declarations';

describe('dynamics', () => {
  describe('solidGravityDynamic', () => {
    describe('resolveCollisions', () => {
      const cases: [string, TLayout, TLayout][] = [
        [
          'branch preference',
          [
            { x: 0, y: 4, w: 2, h: 2, i: '1' },
            { x: 0, y: 3, w: 2, h: 2, i: '2', priority: 1 },
            { x: 0, y: 2, w: 2, h: 2, i: '3' },
          ],
          [
            { x: 0, y: 7, w: 2, h: 2, i: '1' },
            { x: 0, y: 3, w: 2, h: 2, i: '2', priority: 1 },
            { x: 0, y: 5, w: 2, h: 2, i: '3' },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, layout, expected) => {
        expect(resolveCollisions(layout)).toEqual(expected);
      });
    });
  });
});
