import { describe, expect, test } from 'vitest';

import { getUpperSpace } from './getUpperSpace';
import type { TLayoutItem } from '../declarations';
import type { TMatrix } from './declarations';

describe('matrix', () => {
  describe('getUpperSpace', () => {
    const cases: [string, TMatrix, TLayoutItem, number][] = [
      [
        'free space',
        [
          [null, null, null],
          [null, null, null],
          [null, 'W2', 'W2'],
          [null, 'W2', 'W2'],
        ],
        { x: 1, y: 2, w: 2, h: 2, i: 'W2' },
        2,
      ],
      [
        'collision at 1',
        [
          ['W1', 'W1', null],
          [null, null, null],
          [null, 'W2', 'W2'],
          [null, 'W2', 'W2'],
        ],
        { x: 1, y: 2, w: 2, h: 2, i: 'W2' },
        1,
      ],
      [
        'collision at 0',
        [
          ['W1', 'W1', null],
          [null, 'W2', 'W2'],
          [null, 'W2', 'W2'],
        ],
        { x: 1, y: 1, w: 2, h: 2, i: 'W2' },
        0,
      ],
      [
        'collision at ground',
        [
          [null, 'W2', 'W2'],
          [null, 'W2', 'W2'],
        ],
        { x: 1, y: 0, w: 2, h: 2, i: 'W2' },
        0,
      ],
    ];
    test.each(cases)('%s', (_title, matrix, layoutItem, expected) => {
      expect(getUpperSpace(matrix, layoutItem)).toEqual(expected);
    });
  });
});
