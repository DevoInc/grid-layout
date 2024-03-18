import { describe, expect, test } from 'vitest';

import { removeDuplicates } from './removeDuplicates';
import type { Layout } from '../../declarations';

describe('getElementsToMove', () => {
  const cases: [string, Layout, Layout][] = [
    [
      'Case 1',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2' },
      ],
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2' },
      ],
    ],
    [
      'Case 2',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 3, w: 1, h: 1, i: 'W3' },
        { x: 0, y: 3, w: 1, h: 1, i: 'W3' },
        { x: 0, y: 3, w: 1, h: 1, i: 'W3' },
      ],
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 3, w: 1, h: 1, i: 'W3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, expected) => {
    expect(removeDuplicates(layout)).toEqual(expected);
  });
});
