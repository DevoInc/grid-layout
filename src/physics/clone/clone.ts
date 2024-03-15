import type { Layout, LayoutItem } from '../../declarations';

export const cloneLayoutItem = (layout: LayoutItem) => ({ ...layout });
export const cloneLayout = (layout: Layout) => layout.map(cloneLayoutItem);
