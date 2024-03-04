import type { Layout } from '../declarations';

export const setItemProps =
  (layout: Layout) => (id: string, props: { [key: string]: unknown }) =>
    layout.map((item) => (item.i === id ? { ...item, ...props } : item));
