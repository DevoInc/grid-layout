import { describe, expect, test } from 'vitest';

import { solidGravityDynamic } from './solidGravityDynamic';
import type { TLayout } from '../../declarations';

describe('dynamics', () => {
  describe('solidGravityDynamic', () => {
    const cases: [string, TLayout, TLayout][] = [
      [
        'general case',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 0, w: 2, h: 2, i: '2' },
          { x: 0, y: 2, w: 2, h: 2, i: '3' },
        ],
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 0, y: 2, w: 2, h: 2, i: '2' },
          { x: 0, y: 4, w: 2, h: 2, i: '3' },
        ],
      ],
      [
        'two elements one with priority left near to the other',
        [
          { x: 0, y: 0, w: 2, h: 2, i: '1' },
          { x: 1, y: 0, w: 2, h: 2, i: '2', priority: 1 },
        ],
        [
          { x: 0, y: 2, w: 2, h: 2, i: '1' },
          { x: 1, y: 0, w: 2, h: 2, i: '2' },
        ],
      ],
      [
        'should remove priority',
        [
          { h: 9, i: '0', w: 6, x: 0, y: 0 },
          { h: 9, i: '1', w: 6, x: 6, y: 4, priority: 1 },
        ],
        [
          { h: 9, i: '0', w: 6, x: 0, y: 0 },
          { h: 9, i: '1', w: 6, x: 6, y: 0 },
        ],
      ],
      [
        'should remian 2 on ground',
        [
          { w: 3, h: 10, x: 4, y: 0, i: '1' },
          { w: 3, h: 9, x: 3, y: 10, i: '2' },
          { w: 4, h: 14, x: 0, y: 0, i: '3' },
        ],
        [
          { w: 3, h: 10, x: 4, y: 0, i: '1' },
          { w: 3, h: 9, x: 3, y: 14, i: '2' },
          { w: 4, h: 14, x: 0, y: 0, i: '3' },
        ],
      ],
      [
        'should not remian 2 on ground by priority',
        [
          { w: 3, h: 10, x: 4, y: 0, i: '1' },
          { w: 3, h: 9, x: 3, y: 10, i: '2', priority: 1 },
          { w: 4, h: 14, x: 0, y: 0, i: '3' },
        ],
        [
          { w: 3, h: 10, x: 4, y: 0, i: '1' },
          { w: 3, h: 9, x: 3, y: 10, i: '2' },
          { w: 4, h: 14, x: 0, y: 19, i: '3' },
        ],
      ],
    ];

    test.each(cases)('%s', (_title, layout, expected) => {
      expect(solidGravityDynamic(layout)).toEqual(expected);
    });
  });
});
