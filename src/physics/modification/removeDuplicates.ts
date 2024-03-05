import type { Layout } from '../../declarations';

export const removeDuplicates = (layout: Layout) => {
  const idxs: string[] = [];
  return layout.filter((item) => {
    if (!idxs.includes(item.i)) {
      idxs.push(item.i);
      return true;
    }
    return false;
  });
};
