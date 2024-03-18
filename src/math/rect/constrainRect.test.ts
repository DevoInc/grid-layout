import { describe, expect, test } from 'vitest';

import { constrainRect } from './constrainRect';
import type { TAABB, TRect } from '../declarations';

describe('constrain', () => {
  const cases: [string, TRect, TAABB, TRect][] = [
    [
      'inside boundaries',
      { x: 0, y: 0, w: 1, h: 1 },
      { x1: 0, y1: 0, x2: 12, y2: Infinity },
      { x: 0, y: 0, w: 1, h: 1 },
    ],
    [
      '"x" inside boundary & "w" > boundary width ',
      { x: 6, y: 0, w: 18, h: 1 },
      { x1: 0, y1: 0, x2: 12, y2: Infinity },
      { x: 6, y: 0, w: 6, h: 1 },
    ],
    [
      '"x" = boundary width & "w" > boundary width',
      { x: 12, y: 0, w: 18, h: 1 },
      { x1: 0, y1: 0, x2: 12, y2: Infinity },
      { x: 0, y: 0, w: 12, h: 1 },
    ],
    [
      '"x" > boundary width & "w" < inside boundary',
      { x: 18, y: 0, w: 2, h: 1 },
      { x1: 0, y1: 0, x2: 12, y2: Infinity },
      { x: 10, y: 0, w: 2, h: 1 },
    ],
  ];

  test.each(cases)('%s', (_title, a, b, expected) => {
    expect(constrainRect(a, b)).toEqual(expected);
  });
});
