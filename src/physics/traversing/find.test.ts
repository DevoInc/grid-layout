import { describe, expect, test } from 'vitest';

import { findById } from './find';
import type { LayoutItem } from '../../declarations';

describe('layout', () => {
  describe('find', () => {
    describe('findById', () => {
      const cases: [string, string, LayoutItem, boolean][] = [
        ['match', 'a', { x: 0, y: 0, w: 0, h: 0, i: 'a' }, true],
        ['not match', 'b', { x: 0, y: 0, w: 0, h: 0, i: 'a' }, false],
      ];

      test.each(cases)('%s', (_title, id, layoutItem, expected) => {
        expect(findById(id)(layoutItem)).toEqual(expected);
      });
    });
  });
});
