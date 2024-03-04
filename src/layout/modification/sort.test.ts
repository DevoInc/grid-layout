import { describe, expect, test } from 'vitest';

import { type Layout } from '../declarations';
import { sortLayout } from './sort';

describe('Sort', () => {
  describe('sortLayoutItemsByRowCol', () => {
    test('should return a sorted layout array based on row and column values', () => {
      const layout: Layout = [
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
      ];

      const sortedLayout = sortLayout(layout);

      expect(sortedLayout).toEqual([
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
      ]);
    });

    test('should handle layouts with multiple rows and columns', () => {
      const layout: Layout = [
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
        { i: '4', x: 1, y: 1, w: 3, h: 4 },
        { i: '5', x: 2, y: 2, w: 3, h: 4 },
      ];

      const sortedLayout = sortLayout(layout);

      expect(sortedLayout).toEqual([
        { i: '4', x: 1, y: 1, w: 3, h: 4 },
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '5', x: 2, y: 2, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
      ]);
    });

    test('should sort items in ascending order based on y value, then x value', () => {
      const layout: Layout = [
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
        { i: '4', x: 1, y: 1, w: 3, h: 4 },
        { i: '5', x: 2, y: 2, w: 3, h: 4 },
      ];

      const sortedLayout = sortLayout(layout);

      expect(sortedLayout).toEqual([
        { i: '4', x: 1, y: 1, w: 3, h: 4 },
        { i: '2', x: 2, y: 1, w: 3, h: 4 },
        { i: '1', x: 1, y: 2, w: 3, h: 4 },
        { i: '5', x: 2, y: 2, w: 3, h: 4 },
        { i: '3', x: 3, y: 3, w: 3, h: 4 },
      ]);
    });

    test('should handle empty layout array', () => {
      const layout: Layout = [];

      const sortedLayout = sortLayout(layout);

      expect(sortedLayout).toEqual([]);
    });

    test('test', () => {
      const layout: Layout = [
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 9, y: 1, w: 2, h: 2, i: 'W2' },
        { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W3' },
        { x: 10, y: 2, w: 2, h: 2, i: 'W6' },
        { x: 0, y: 4, w: 2, h: 2, i: 'W4' },
      ];

      const sortedLayout = sortLayout(layout);

      expect(sortedLayout).toEqual([
        { x: 0, y: 0, w: 2, h: 2, i: 'W1' },
        { x: 10, y: 0, w: 2, h: 2, i: 'W5' },
        { x: 9, y: 1, w: 2, h: 2, i: 'W2' },
        { x: 0, y: 2, w: 2, h: 2, i: 'W3' },
        { x: 10, y: 2, w: 2, h: 2, i: 'W6' },
        { x: 0, y: 4, w: 2, h: 2, i: 'W4' },
      ]);
    });
  });
});
