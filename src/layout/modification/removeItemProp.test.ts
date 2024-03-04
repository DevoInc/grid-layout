import { describe, expect, test } from 'vitest';

import { removeItemProp } from './removeItemProp';
import type { Layout } from '../declarations';

describe('getElementsToMove', () => {
  const cases: [string, Layout, string, string, Layout][] = [
    [
      'Remove placeholder',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2', placeholder: 'move' },
      ],
      'W2',
      'placeholder',
      [
        { x: 0, y: 0, w: 1, h: 1, i: 'W1' },
        { x: 1, y: 2, w: 1, h: 1, i: 'W2' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, id, prop, expected) => {
    expect(removeItemProp(layout)(id, prop)).toEqual(expected);
  });
});
