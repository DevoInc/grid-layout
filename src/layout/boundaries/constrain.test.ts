import { describe, expect, test } from 'vitest';

import { constrain } from './constrain';
import type { Layout } from '../declarations';

describe('constrain', () => {
  const cases: [string, Layout, { w: number; h: number }, Layout][] = [
    [
      'Case 1',
      [
        { x: 0, y: -2, w: 2, h: 2, i: 'W1' },
        { x: -2, y: 0, w: 2, h: 2, i: 'W2' },
        { x: 0, y: 1, w: 20, h: 2, i: 'W3' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W4' },
        { x: 20, y: 0, w: 2, h: 2, i: 'W5' },
        { x: -2, y: -2, w: 20, h: 2, i: 'W6' },
      ],
      { w: 12, h: Infinity },
      [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 0, y: 0, w: 2, h: 2, i: 'W2' },
        { x: 11, y: 1, w: 1, h: 2, i: 'W3' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W4' },
        { x: 0, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 0, y: 0, w: 12, h: 2, i: 'W6' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, limits, expected) => {
    expect(constrain(layout)(limits)).toEqual(expected);
  });
});
