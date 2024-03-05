import { type Rect } from '../rect';

export type Interval = { start: number; end: number };

export const intervalHasValue = (interval: Interval, x: number) =>
  x > interval.start && x < interval.end;

export const intervalAreEquals = (int1: Interval, int2: Interval) =>
  int1.start === int2.start && int1.end === int2.end;

export const areIntervalsOverlaped = (int1: Interval, int2: Interval) =>
  intervalHasValue(int2, int1.start) ||
  intervalHasValue(int2, int1.end) ||
  intervalHasValue(int1, int2.start) ||
  intervalHasValue(int1, int2.end) ||
  intervalAreEquals(int1, int2);

export const getIntervalFromRect = (rect: Rect): Interval => ({
  start: rect.x1,
  end: rect.x2,
});
