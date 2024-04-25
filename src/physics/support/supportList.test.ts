import { describe, expect, test } from 'vitest';

import type { TLayout, TLayoutItem } from '../declarations';
import { getSupportList } from './supportList';

describe('tree', () => {
  describe('supportTree', () => {
    describe('getSupportList', () => {
      const cases: [string, TLayout, TLayoutItem, TLayout][] = [
        [
          'one over other',
          [
            { x: 0, y: 0, w: 1, h: 1, i: '1' },
            { x: 0, y: 1, w: 1, h: 1, i: '2' },
          ],
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
