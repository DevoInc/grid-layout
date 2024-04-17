import type { TLayout, TLayoutItem } from '../../declarations';

export const removeProp = (layout: TLayout, prop: keyof TLayoutItem) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  layout.map(({ [prop]: _, ...rest }) => rest as TLayoutItem);
