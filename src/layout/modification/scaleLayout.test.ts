import { describe, expect, test } from 'vitest';

import type { TLayout } from '../../declarations';
import { scaleLayout } from './scaleLayout';

describe('layout', () => {
  describe('modifications', () => {
    describe('scaleLayout', () => {
      const cases: [string, TLayout, number, number, TLayout][] = [
        [
          'scale layout by 2 in both axis',
          [
            { i: '1', x: 1, y: 2, w: 3, h: 4 },
            { i: '2', x: 2, y: 1, w: 3, h: 4 },
            { i: '3', x: 3, y: 3, w: 3, h: 4 },
          ],
          2,
          2,
          [
            { i: '1', x: 2, y: 4, w: 6, h: 8 },
            { i: '2', x: 4, y: 2, w: 6, h: 8 },
            { i: '3', x: 6, y: 6, w: 6, h: 8 },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, layout, xFactor, yFactor, expected) => {
        expect(scaleLayout(layout, xFactor, yFactor)).toEqual(expected);
      });
    });
  });
});
