import { describe, expect, test } from 'vitest';

import type { TLayout } from '../../declarations';
import { gravity } from './gravity';

describe('layout', () => {
  describe('gravity', () => {
    const cases: [string, TLayout, TLayout][] = [
      [
        'with plenty of space between widgets',
        [
          { x: 0, y: 0, w: 1, h: 1, i: '1' },
          { x: 1, y: 1, w: 1, h: 1, i: '2' },
        ],
        [
          { x: 0, y: 0, w: 1, h: 1, i: '1' },
          { x: 1, y: 0, w: 1, h: 1, i: '2' },
        ],
      ],
      [
        'with plenty of space between widgets',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 8, w: 2, h: 2, i: '2' },
          { x: 2, y: 16, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 2, w: 2, h: 2, i: '2' },
          { x: 2, y: 4, w: 2, h: 2, i: '3' },
        ],
      ],
      [
        'with plenty of space between widgets',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 8, w: 2, h: 2, i: '2' },
          { x: 3, y: 16, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 2, w: 2, h: 2, i: '2' },
          { x: 3, y: 0, w: 2, h: 2, i: '3' },
        ],
      ],
      [
        'same layout',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 2, w: 2, h: 2, i: '2' },
          { x: 1, y: 4, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 2, w: 2, h: 2, i: '2' },
          { x: 1, y: 4, w: 2, h: 2, i: '3' },
        ],
      ],
      [
        'test 3',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 18, w: 2, h: 2, i: '2' },
          { x: 0, y: 4, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 4, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
        ],
      ],
      [
        'test 4',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 18, w: 2, h: 2, i: '2' },
          { x: 0, y: 4, w: 2, h: 2, i: '3' },
          { x: 2, y: 0, w: 2, h: 2, i: '4' },
          { x: 2, y: 18, w: 2, h: 2, i: '5' },
          { x: 2, y: 4, w: 2, h: 2, i: '6' },
          { x: 4, y: 0, w: 2, h: 2, i: '7' },
          { x: 4, y: 18, w: 2, h: 2, i: '8' },
          { x: 4, y: 4, w: 2, h: 2, i: '9' },
          { x: 6, y: 0, w: 2, h: 2, i: '10' },
          { x: 6, y: 18, w: 2, h: 2, i: '11' },
          { x: 6, y: 4, w: 2, h: 2, i: '12' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 4, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
          { x: 2, y: 0, w: 2, h: 2, i: '4' },
          { x: 2, y: 4, w: 2, h: 2, i: '5' },
          { x: 2, y: 2, w: 2, h: 2, i: '6' },
          { x: 4, y: 0, w: 2, h: 2, i: '7' },
          { x: 4, y: 4, w: 2, h: 2, i: '8' },
          { x: 4, y: 2, w: 2, h: 2, i: '9' },
          { x: 6, y: 0, w: 2, h: 2, i: '10' },
          { x: 6, y: 4, w: 2, h: 2, i: '11' },
          { x: 6, y: 2, w: 2, h: 2, i: '12' },
        ],
      ],
      [
        'test 5',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
          { x: 0, y: 5, w: 2, h: 2, i: '4' },
          { x: 10, y: 0, w: 2, h: 2, i: '5' },
          { x: 10, y: 8, w: 2, h: 2, i: '6' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 2, y: 0, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
          { x: 0, y: 4, w: 2, h: 2, i: '4' },
          { x: 10, y: 0, w: 2, h: 2, i: '5' },
          { x: 10, y: 2, w: 2, h: 2, i: '6' },
        ],
      ],
    ];

    test.each(cases)('%s', (_title, layout, expected) => {
      expect(gravity(layout)).toEqual(expected);
    });
  });
});
