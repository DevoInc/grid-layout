import { describe, expect, test } from 'vitest';

import type { LayoutItem, Layout } from '../../declarations';
import { getUpElements } from './getUpElements';

describe('layout', () => {
  describe('traversing', () => {
    describe('getUpElements', () => {
      const cases: [string, Layout, LayoutItem, Layout][] = [
        [
          'three aligned elements',
          [
            { x: 0, y: 0, w: 1, h: 1, i: 'a' },
            { x: 0, y: 1, w: 1, h: 1, i: 'b' },
            { x: 0, y: 2, w: 1, h: 1, i: 'c' },
          ],
          { x: 0, y: 2, w: 1, h: 1, i: 'c' },
          [
            { x: 0, y: 0, w: 1, h: 1, i: 'a' },
            { x: 0, y: 1, w: 1, h: 1, i: 'b' },
          ],
        ],
        [
          'left segment',
          [
            { x: 0, y: 0, w: 2, h: 1, i: 'a' },
            { x: 0, y: 1, w: 1, h: 1, i: 'b' },
          ],
          { x: 0, y: 1, w: 1, h: 1, i: 'b' },
          [{ x: 0, y: 0, w: 2, h: 1, i: 'a' }],
        ],
        [
          'right segment',
          [
            { x: 0, y: 0, w: 2, h: 1, i: 'a' },
            { x: 1, y: 1, w: 1, h: 1, i: 'b' },
          ],
          { x: 1, y: 1, w: 1, h: 1, i: 'b' },
          [{ x: 0, y: 0, w: 2, h: 1, i: 'a' }],
        ],
        [
          'not overlapped',
          [
            { x: 0, y: 0, w: 1, h: 1, i: 'a' },
            { x: 1, y: 1, w: 1, h: 1, i: 'b' },
          ],
          { x: 1, y: 1, w: 1, h: 1, i: 'b' },
          [],
        ],
      ];

      test.each(cases)('%s', (_title, layout, layoutItem, expected) => {
        expect(getUpElements(layout)(layoutItem)).toEqual(expected);
      });
    });
  });
});
