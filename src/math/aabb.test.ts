import { describe, expect, test } from 'vitest';

import { areAABBInProjection } from './aabb';
import type { TAABB, TDirection } from './declarations';

describe('math', () => {
  describe('aabb', () => {
    describe('areAABBInProjection', () => {
      const cases: [string, TAABB, TAABB, TDirection, boolean, boolean][] = [
        [
          'in projection',
          { x1: 0, y1: 0, x2: 2, y2: 2 },
          { x1: 0, y1: 2, x2: 2, y2: 4 },
          'down',
          true,
          true,
        ],
      ];

      test.each(cases)('%s', (_title, a, b, dir, inmediate, expected) => {
        expect(areAABBInProjection(a, b, dir, inmediate)).toEqual(expected);
      });
    });
  });
});
