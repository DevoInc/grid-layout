import { describe, expect, test } from 'vitest';

import { getAABBFromRect } from './aabb';
import type { TAABB, TRect } from '../declarations';

describe('math', () => {
  describe('aabb', () => {
    describe('getAABBFromRect', () => {
      const cases: [string, TRect, TAABB][] = [
        [
          'normal rect',
          { x: 0, y: 0, w: 1, h: 1 },
          { x1: 0, y1: 0, x2: 1, y2: 1 },
        ],
        [
          'separate from origin(positive)',
          { x: 1, y: 1, w: 2, h: 2 },
          { x1: 1, y1: 1, x2: 3, y2: 3 },
        ],
        [
          'separate from origin(positive) and negative size',
          { x: 1, y: 1, w: -2, h: -2 },
          { x1: 1, y1: 1, x2: -1, y2: -1 },
        ],
        [
          'separate from origin(negative) and positive size',
          { x: -1, y: -1, w: 2, h: 2 },
          { x1: -1, y1: -1, x2: 1, y2: 1 },
        ],
      ];
      test.each(cases)('%s', (_title, rect, expected) => {
        expect(getAABBFromRect(rect)).toEqual(expected);
      });
    });
  });
});
