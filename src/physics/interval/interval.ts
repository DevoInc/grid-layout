export type Interval = [number, number];

export const intervalHasValue = (interval: Interval, x: number) =>
  x > interval[0] && x < interval[1];

export const intervalAreEquals = (int1: Interval, int2: Interval) =>
  int1[0] === int2[0] && int1[1] === int2[1];

export const areIntervalsOverlaped = (int1: Interval, int2: Interval) =>
  intervalHasValue(int2, int1[0]) ||
  intervalHasValue(int2, int1[1]) ||
  intervalHasValue(int1, int2[0]) ||
  intervalHasValue(int1, int2[1]) ||
  intervalAreEquals(int1, int2);
