import type { TLayout } from '../../declarations';

export const removeDuplicates = (layout: TLayout) => {
  const includedIds: string[] = [];
  return layout.filter((item) => {
    if (includedIds.includes(item.i)) {
      return false;
    }
    includedIds.push(item.i);
    return true;
  });
};
