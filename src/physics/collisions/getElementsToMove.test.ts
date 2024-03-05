import { describe, expect, test } from 'vitest';

import { getElementsToMove } from './getElementsToMove';
import type { Layout, LayoutItem } from '../../declarations';

describe('getElementsToMove', () => {
  const cases: [string, Layout, LayoutItem, Layout][] = [
    [
      'Case 1',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W3' },
      ],
      { x: 0, y: 1, w: 1, h: 1, i: 'W4' },
      [
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, layoutItem, expected) => {
    expect(getElementsToMove(layout)(layoutItem)).toEqual(expected);
  });
});
