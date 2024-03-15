import type { Layout } from '../../declarations';

export const removeDuplicates = (layout: Layout) => {
  const includedIds: string[] = [];
  return layout.filter((item) => {
    if (includedIds.includes(item.i)) {
      return false;
    }
    includedIds.push(item.i);
    return true;
  });
};
