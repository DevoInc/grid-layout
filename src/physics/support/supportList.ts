import type { TLayout, TLayoutItem } from '../../declarations';
import type { THeightMap } from './declarations';
import { areIntervalsOverlaped, getAABBFromRect } from '../../math';

export const getSupportList = (
  heightMap: THeightMap,
  item: TLayoutItem,
  cachedIds: string[] = [],
): TLayout => {
  if (cachedIds.includes(item.i)) {
    return [];
  }

  const itemAABB = getAABBFromRect(item);
  cachedIds.push(item.i);

  return [
    item,
    ...(heightMap[itemAABB.y2] ?? [])
      .filter(
        (nextItem) =>
          nextItem.y === itemAABB.y2 &&
          areIntervalsOverlaped(
            [itemAABB.x1, itemAABB.x2],
            [nextItem.x, nextItem.x + nextItem.w],
          ),
      )
      .reduce(
        (prev, curr) => [
          ...prev,
          ...getSupportList(heightMap, curr, cachedIds),
        ],
        [],
      ),
  ];
};
