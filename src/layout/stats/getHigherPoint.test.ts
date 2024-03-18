import { describe, expect, test } from 'vitest';

import type { Layout } from '../../declarations';
import { getHigherPoint } from './getHigherPoint';

describe('layout', () => {
  describe('stats', () => {
    describe('getHigherPoint', () => {
      const cases: [string, Layout, number][] = [
        [
          'two elements',
          [
            { x: 0, y: 0, w: 1, h: 1, i: 'a' },
            { x: 0, y: 1, w: 1, h: 2, i: 'b' },
          ],
          3,
        ],
        [
          'two horizontal elements',
          [
            { x: 0, y: 0, w: 1, h: 1, i: 'a' },
            { x: 1, y: 0, w: 1, h: 1, i: 'b' },
          ],
          1,
        ],
      ];

      test.each(cases)('%s', (_title, layout, expected) => {
        expect(getHigherPoint(layout)).toEqual(expected);
      });
    });
  });
});
