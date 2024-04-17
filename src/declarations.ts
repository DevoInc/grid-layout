import type { TRect } from './math/declarations';

export type TEventType = 'move' | 'resize';

export type TLayoutItem = TRect & {
  i: string;
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  priority?: number;
  placeholder?: 'move' | 'resize';
  /** This prop is for store any kind of data that will be stored on the layout */
  data?: { [key: string]: unknown };
};

export type TLayout = TLayoutItem[];
