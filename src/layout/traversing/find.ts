import type { TLayoutItem } from '../../declarations';

export const findById = (id: string) => (item: TLayoutItem) => item.i === id;
