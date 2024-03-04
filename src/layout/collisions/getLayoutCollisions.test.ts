import { describe, expect, test } from 'vitest';

import type { Layout } from '../declarations';
import { getLayoutCollisions } from './getLayoutCollisions';

describe('collisions', () => {
  describe('getLayoutCollisions', () => {
    const cases: [string, Layout, Layout][] = [
      [
        'no collisions',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 3, y: 3, w: 2, h: 2, i: '2' },
        ],
        [],
      ],
      [
        'two elements collision',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 1, w: 2, h: 2, i: '2' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 1, w: 2, h: 2, i: '2' },
        ],
      ],
      [
        'collision between 4 elements',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
          { x: 1, y: 1, w: 2, h: 2, i: '4' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
          { x: 1, y: 1, w: 2, h: 2, i: '4' },
        ],
      ],
      [
        'two elements collision but other with no collisions',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 1, w: 2, h: 2, i: '2' },
          { x: 0, y: 3, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 1, w: 2, h: 2, i: '2' },
        ],
      ],
      [
        'collision between 4 elements with priority',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2', priority: 1 },
          { x: 0, y: 2, w: 2, h: 2, i: '3', priority: 2 },
          { x: 1, y: 1, w: 2, h: 2, i: '4' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2', priority: 1 },
          { x: 0, y: 2, w: 2, h: 2, i: '3', priority: 2 },
          { x: 1, y: 1, w: 2, h: 2, i: '4' },
        ],
      ],
      [
        'test',
        [
          { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
          { x: 0, y: 2, w: 2, h: 2, i: 'W2' },
          { x: 0, y: 3, w: 2, h: 2, i: 'W3' },
          { x: 0, y: 4, w: 2, h: 2, i: 'W4' },
          { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
          { x: 9, y: 0, w: 2, h: 2, i: 'W6' },
        ],
        [
          { x: 0, y: 2, w: 2, h: 2, i: 'W2' },
          { x: 0, y: 3, w: 2, h: 2, i: 'W3' },
          { x: 0, y: 4, w: 2, h: 2, i: 'W4' },
          { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
          { x: 9, y: 0, w: 2, h: 2, i: 'W6' },
        ],
      ],
    ];

    test.each(cases)('%s', (_title, layout, expected) => {
      expect(getLayoutCollisions(layout)).toEqual(expected);
    });
  });
});
