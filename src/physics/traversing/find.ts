import type { LayoutItem } from '../../declarations';

export const findById = (id: string) => (item: LayoutItem) => item.i === id;
