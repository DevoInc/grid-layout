import { describe, expect, test } from 'vitest';

import { compact } from './compact';
import type { Layout } from '../declarations';

describe('compact', () => {
  const cases: [string, Layout, Layout][] = [
    [
      'general case',
      [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 0, y: 0, w: 2, h: 2, i: 'W2' },
        { x: 0, y: 1, w: 2, h: 2, i: 'W3' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W4' },
        { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 9, y: 0, w: 2, h: 2, i: 'W6' },
      ],
      [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W2' },
        { x: 9, y: 2, w: 2, h: 2, i: 'W6' },
        { x: 0, y: 4, w: 2, h: 2, i: 'W4' },
        { x: 0, y: 6, w: 2, h: 2, i: 'W3' },
      ],
    ],
    [
      'two elements one with priority left near to the other',
      [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 1, y: 0, w: 2, h: 2, i: 'W2', priority: 1 },
      ],
      [
        { x: 1, y: 0, w: 2, h: 2, i: 'W2' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W1' },
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
        { w: 4, h: 14, x: 0, y: 0, i: '3' },
        { w: 3, h: 10, x: 4, y: 0, i: '1' },
        { w: 3, h: 9, x: 3, y: 14, i: '2' },
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
    expect(compact(layout)).toEqual(expected);
  });
});
