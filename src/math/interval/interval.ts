import type { TInterval } from '../declarations';

export const hasIntervalValue = (interval: TInterval, x: number) =>
  x > interval[0] && x < interval[1];

export const areIntervalEquals = (int1: TInterval, int2: TInterval) =>
  int1[0] === int2[0] && int1[1] === int2[1];

export const areIntervalsOverlaped = (int1: TInterval, int2: TInterval) =>
  hasIntervalValue(int2, int1[0]) ||
  hasIntervalValue(int2, int1[1]) ||
  hasIntervalValue(int1, int2[0]) ||
  hasIntervalValue(int1, int2[1]) ||
  areIntervalEquals(int1, int2);
