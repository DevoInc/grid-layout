import { describe, expect, test } from 'vitest';

import { removeProp } from './removeProp';
import type { TLayout, TLayoutItem } from '../../declarations';

describe('removeProp', () => {
  const cases: [string, TLayout, keyof TLayoutItem, TLayout][] = [
    [
      'Remove priority',
      [
        { x: 0, y: 0, w: 1, h: 1, i: '1', priority: 1 },
        { x: 1, y: 2, w: 1, h: 1, i: '2', priority: 2 },
        { x: 0, y: 4, w: 1, h: 1, i: '3' },
      ],
      'priority',
      [
        { x: 0, y: 0, w: 1, h: 1, i: '1' },
        { x: 1, y: 2, w: 1, h: 1, i: '2' },
        { x: 0, y: 4, w: 1, h: 1, i: '3' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, layout, prop, expected) => {
    expect(removeProp(layout, prop)).toEqual(expected);
  });
});
