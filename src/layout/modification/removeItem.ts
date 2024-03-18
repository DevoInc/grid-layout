import type { Layout } from '../../declarations';

export const removeItem = (layout: Layout) => (id: string) =>
  layout.filter((item) => item.i !== id);
