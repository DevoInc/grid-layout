import { describe, expect, test } from 'vitest';

import type { TLayout } from '../../declarations';
import { roundLayout } from './round';

describe('Round', () => {
  test('round layout', () => {
    const layout: TLayout = [
      { i: '1', x: 1, y: 2, w: 3.5, h: 4 },
      { i: '2', x: 2.8, y: 1, w: 3, h: 4 },
      { i: '3', x: 3, y: 3.4, w: 3, h: 4.1 },
    ];

    const response: TLayout = [
      { i: '1', x: 1, y: 2, w: 4, h: 4 },
      { i: '2', x: 3, y: 1, w: 3, h: 4 },
      { i: '3', x: 3, y: 3, w: 3, h: 4 },
    ];

    expect(roundLayout(layout)).toEqual(response);
  });
});
