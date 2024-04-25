import { describe, expect, test } from 'vitest';

import type { TLayout, TLayoutItem } from '../../declarations';
import type { THeightMap } from './declarations';
import { getSupportList } from './supportList';

describe('physics', () => {
  describe('support', () => {
    describe('getSupportList', () => {
      const cases: [string, THeightMap, TLayoutItem, TLayout][] = [
        [
          'one over other',
          {
            0: [{ x: 0, y: 0, w: 1, h: 1, i: '1' }],
            1: [{ x: 0, y: 1, w: 1, h: 1, i: '2' }],
          },
          { x: 0, y: 0, w: 1, h: 1, i: '1' },
          [
            { x: 0, y: 0, w: 1, h: 1, i: '1' },
            { x: 0, y: 1, w: 1, h: 1, i: '2' },
          ],
        ],
      ];
      test.each(cases)('%s', (_title, layout, item, expected) => {
        expect(getSupportList(layout, item)).toEqual(expected);
      });
    });
  });
});
