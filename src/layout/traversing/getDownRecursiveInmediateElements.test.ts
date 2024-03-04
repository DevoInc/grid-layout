import { describe, expect, test } from 'vitest';

import { getDownRecursiveInmediateElements } from './getDownRecursiveInmediateElements';
import type { Layout, LayoutItem } from '../declarations';

describe('test', () => {
  const cases: [string, Layout, LayoutItem, Layout][] = [
    [
      'Case 1',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W3' },
      ],
      { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
      [
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, layoutItem, expected) => {
    expect(getDownRecursiveInmediateElements(layout, layoutItem)).toEqual(
      expected,
    );
  });
});
