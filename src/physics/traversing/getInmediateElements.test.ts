import { describe, expect, test } from 'vitest';

import { getInmediateElements } from './getInmediateElements';
import type { Layout, LayoutItem } from '../../declarations';

describe('test', () => {
  const cases: [string, Layout, LayoutItem, Layout][] = [
    [
      'Case 1',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
      ],
      { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
      [{ x: 0, y: 1, w: 1, h: 1, i: 'W2' }],
    ],
    [
      'Case 2',
      [
        { x: 0, y: 0, w: 2, h: 1, i: 'W1' },
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 1, y: 1, w: 1, h: 1, i: 'W3' },
      ],
      { x: 0, y: 0, w: 2, h: 1, i: 'W1' },
      [
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 1, y: 1, w: 1, h: 1, i: 'W3' },
      ],
    ],
    [
      'Case 3',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 0, y: 1, w: 1, h: 1, i: 'W2' },
        { x: 0, y: 2, w: 1, h: 1, i: 'W3' },
      ],
      { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
      [{ x: 0, y: 1, w: 1, h: 1, i: 'W2' }],
    ],
  ];

  test.each(cases)('%s', (_title, layout, layoutItem, expected) => {
    expect(getInmediateElements(layout)(layoutItem, 'down')).toEqual(expected);
  });
});
