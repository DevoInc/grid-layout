import type { Layout, LayoutItem } from '../../declarations';

export const removeProp = (layout: Layout) => (prop: string) =>
  layout.map(
    (item) =>
      Object.entries(item).reduce((prev, [k, v]) => {
        return k !== prop ? { ...prev, [k]: v } : prev;
      }, {}) as LayoutItem,
  );
