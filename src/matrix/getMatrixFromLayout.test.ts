import { describe, expect, test } from 'vitest';

import { getMatrixFromLayout } from './getMatrixFromLayout';
import type { TLayout } from '../declarations';
import type { TMatrix } from './declarations';

describe('matrix', () => {
  describe('getMatrixFromLayout', () => {
    const cases: [string, TLayout, TMatrix][] = [
      [
        'two elements',
        [
          { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
          { x: 1, y: 2, w: 2, h: 2, i: 'W2' },
        ],
        [
          // prettier-ignore
          ['W1', 'W1', null],
          // prettier-ignore
          ['W1', 'W1', null],
          // prettier-ignore
          [null, 'W2', 'W2'],
          // prettier-ignore
          [null, 'W2', 'W2'],
        ],
      ],
    ];
    test.each(cases)('%s', (_title, layout, expected) => {
      expect(getMatrixFromLayout(layout)).toEqual(expected);
    });
  });
});
