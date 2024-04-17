import { describe, expect, test } from 'vitest';

import { constrainLayout } from './constrainLayout';
import type { TLayout } from '../../declarations';
import { type TAABB } from '../../math';

describe('constrain', () => {
  const cases: [string, TLayout, TAABB, TLayout][] = [
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
      { x1: 0, y1: 0, x2: 12, y2: Infinity },
      [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 0, y: 0, w: 2, h: 2, i: 'W2' },
        { x: 0, y: 1, w: 12, h: 2, i: 'W3' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W4' },
        { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 0, y: 0, w: 12, h: 2, i: 'W6' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, boundaries, expected) => {
    expect(constrainLayout(layout, boundaries)).toEqual(expected);
  });
});
