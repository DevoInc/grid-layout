import { describe, expect, test } from 'vitest';

import type { LayoutItem } from '../declarations';
import { hasCollision } from './hasCollision';

describe('collisions', () => {
  describe('hasCollision', () => {
    const cases: [string, LayoutItem, LayoutItem, boolean][] = [
      [
        'should return false when two layout items do not collide',
        { x: 0, y: 0, w: 2, h: 2, i: '1' },
        { x: 3, y: 3, w: 2, h: 2, i: '2' },
        false,
      ],
      [
        'should return true when two layout items collide',
        { x: 0, y: 0, w: 2, h: 2, i: '1' },
        { x: 1, y: 1, w: 2, h: 2, i: '2' },
        true,
      ],
      [
        'should return true when two layout items are in the same position',
        { x: 0, y: 0, w: 2, h: 2, i: '1' },
        { x: 0, y: 0, w: 2, h: 2, i: '2' },
        true,
      ],
      [
        'two elements overlapping horizontal',
        { x: 0, y: 0, w: 2, h: 2, i: '1' },
        { x: 1, y: 0, w: 2, h: 2, i: '2' },
        true,
      ],
    ];

    test.each(cases)('%s', (_title, item1, item2, expected) => {
      expect(hasCollision(item1, item2)).toEqual(expected);
    });
  });
});
