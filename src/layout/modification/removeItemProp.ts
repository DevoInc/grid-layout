import type { Layout, LayoutItem } from '../../declarations';

export const removeItemProp = (layout: Layout) => (id: string, prop: string) =>
  layout.map((item) =>
    item.i === id
      ? (Object.entries(item).reduce((prev, [k, v]) => {
          return k !== prop ? { ...prev, [k]: v } : prev;
        }, {}) as LayoutItem)
      : item,
  );
