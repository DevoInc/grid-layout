import { describe, expect, test } from 'vitest';

import { removeProp } from './removeProp';
import type { Layout } from '../../declarations';

describe('getElementsToMove', () => {
  const cases: [string, Layout, string, Layout][] = [
    [
      'Remove priority',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1', priority: 1 },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2', priority: 2 },
        { x: 0, y: 4, w: 1, h: 1, i: 'W3' },
      ],
      'priority',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 4, w: 1, h: 1, i: 'W3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, prop, expected) => {
    expect(removeProp(layout)(prop)).toEqual(expected);
  });
});
