export type LayoutItemPosition = {
  x: number;
  y: number;
};

export type LayoutItemRect = LayoutItemPosition & {
  w: number;
  h: number;
};

export type LayoutItem = LayoutItemPosition &
  LayoutItemRect & {
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

export type Layout = LayoutItem[];
