import { describe, expect, test } from 'vitest';

import { layoutToPixels } from './layoutToPixels';

describe('layout', () => {
  describe('scale', () => {
    describe('layoutToPixels', () => {
      const cases: [string, number, number, number][] = [
        ['factor 2', 2, 3, 6],
        ['factor 0', 0, 3, 0],
        ['factor 1.5', 1.5, 2, 3],
        ['factor -2', -2, 3, -6],
      ];

      test.each(cases)('%s', (_title, factor, x, expected) => {
        expect(layoutToPixels(factor)(x)).toEqual(expected);
      });
    });
  });
});
