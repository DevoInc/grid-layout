import { describe, expect, test } from 'vitest';

import {
  hasIntervalValue,
  areIntervalEquals,
  areIntervalsOverlaped,
} from './interval';
import type { TInterval } from '../declarations';

describe('math', () => {
  describe('interval', () => {
    describe('hasIntervalValue', () => {
      const cases: [string, TInterval, number, boolean][] = [
        ['left outside', [1, 3], 0, false],
        ['left point', [1, 3], 1, false],
        ['inside', [1, 3], 2, true],
        ['right point', [1, 3], 3, false],
        ['right outside', [1, 3], 4, false],
      ];
      test.each(cases)('%s', (_title, int1, x, expected) => {
        expect(hasIntervalValue(int1, x)).toEqual(expected);
      });
    });

    describe('areIntervalEquals', () => {
      const cases: [string, TInterval, TInterval, boolean][] = [
        ['equals', [2, 3], [2, 3], true],
        ['left point not equal', [2, 3], [1, 3], false],
        ['right point not equal', [2, 3], [2, 4], false],
        ['both points not equal', [2, 3], [1, 4], false],
      ];
      test.each(cases)('%s', (_title, int1, int2, expected) => {
        expect(areIntervalEquals(int1, int2)).toEqual(expected);
      });
    });

    describe('areIntervalOveerlaped', () => {
      const cases: [string, TInterval, TInterval, boolean][] = [
        ['contained second', [0, 3], [1, 2], true],
        ['contained first', [1, 2], [0, 3], true],
        ['overlapped left', [1, 3], [0, 2], true],
        ['overlapped right', [1, 3], [2, 4], true],
        ['left outside', [2, 3], [0, 1], false],
        ['right outside', [2, 3], [4, 5], false],
        ['same point but not overlapped from left', [1, 3], [0, 1], false],
        ['same point but not overlapped from left', [1, 3], [3, 4], false],
        ['overlapped and same right pont', [1, 2], [0, 2], true],
        ['overlapped and same left pont', [1, 2], [1, 3], true],
        ['same interval', [1, 2], [1, 2], true],
      ];
      test.each(cases)('%s', (_title, int1, int2, expected) => {
        expect(areIntervalsOverlaped(int1, int2)).toEqual(expected);
      });
    });
  });
});
