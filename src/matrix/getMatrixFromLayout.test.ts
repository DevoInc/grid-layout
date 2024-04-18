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
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 2, w: 2, h: 2, i: '2' },
        ],
        [
          ['1', '1', null],
          ['1', '1', null],
          [null, '2', '2'],
          [null, '2', '2'],
        ],
      ],
    ];
    test.each(cases)('%s', (_title, layout, expected) => {
      expect(getMatrixFromLayout(layout)).toEqual(expected);
    });
  });
});
