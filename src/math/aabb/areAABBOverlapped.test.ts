import { describe, expect, test } from 'vitest';

import { areAABBOverlapped } from './areAABBOverlapped';
import type { TAABB } from '../declarations';

describe('math', () => {
  describe('aabb', () => {
    describe('areAABBOverlapped', () => {
      const cases: [string, TAABB, TAABB, boolean][] = [
        [
          'overlapped by a corner',
          { x1: 0, y1: 0, x2: 10, y2: 10 },
          { x1: 5, y1: 5, x2: 15, y2: 15 },
          true,
        ],
        [
          'sharing side are not overlapped',
          { x1: 0, y1: 0, x2: 10, y2: 10 },
          { x1: 10, y1: 0, x2: 20, y2: 10 },
          false,
        ],
        [
          'overlapped by a side',
          { x1: 0, y1: 0, x2: 10, y2: 10 },
          { x1: 5, y1: 0, x2: 15, y2: 10 },
          true,
        ],
      ];
      test.each(cases)('%s', (_title, a, b, expected) => {
        expect(areAABBOverlapped(a, b)).toEqual(expected);
      });
    });
  });
});
