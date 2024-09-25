import type { TFrame, TItem, TProps } from './declarations';
import { PADDING, SCALE } from './constants';

export const sortByPriority = (a: TItem, b: TItem) => (b?.p ?? 0) - (a?.p ?? 0);

export const trX = (v: number) => v * SCALE + PADDING[0];
export const trY = (v: number) => v * SCALE + PADDING[1];

export const getPropValues = (item: TItem, prop: TProps) =>
  ((item?.f ?? []) as TFrame[]).reduce(
    (prev, frame) => [
      ...prev,
      (prop in frame ? frame[prop] : prev[prev.length - 1]) as number,
    ],
    [item[prop]],
  );

export const padEndArray = (list: number[], total: number) =>
  list.concat(
    Array.from({ length: total - list.length }).fill(
      list[list.length - 1],
    ) as number[],
  );

export const sumArrays = (arr1: number[], arr2: number[]) =>
  arr1.map((x, i) => x + arr2[i]);

export const getSize = (layout: TItem[]) =>
  layout.reduce(
    (prev, item) => [
      Math.max(
        item.x + item.w,
        prev[0],
        ...sumArrays(getPropValues(item, 'x'), getPropValues(item, 'w')),
      ),
      Math.max(
        item.y + item.h,
        prev[1],
        ...sumArrays(getPropValues(item, 'y'), getPropValues(item, 'h')),
      ),
    ],
    [0, 0],
  );
