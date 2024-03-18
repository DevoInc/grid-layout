import type { TRect } from './math/declarations';

export type EventType = 'move' | 'resize';

export type LayoutItem = TRect & {
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

export type Direction = 'left' | 'right' | 'up' | 'down';

export type Layout = LayoutItem[];
