import { describe, expect, test } from 'vitest';

import { pixelsToLayout } from './pixelsToLayout';

describe('layout', () => {
  describe('scale', () => {
    describe('pixelsToLayout', () => {
      const cases: [string, number, number, number][] = [
        ['factor 2', 2, 6, 3],
        ['factor 0', 0, 0, NaN],
        ['factor 1.5', 1.5, 3, 2],
        ['factor -2', -2, -6, 3],
      ];

      test.each(cases)('%s', (_title, factor, x, expected) => {
        expect(pixelsToLayout(factor)(x)).toEqual(expected);
      });
    });
  });
});
