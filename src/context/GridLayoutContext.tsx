import * as React from 'react';

import { type Layout } from '../physics';

type ContextProps = {
  layout: Layout;
  onChange: (layout: Layout) => void;
  onChangeFinalState: (layout: Layout) => void;
  colWidth: number;
  setColWidth: (colWidth: number) => void;
  cols: number;
  rowHeight: number;
  toHPixels: (x: number) => number;
  toVPixels: (x: number) => number;
  toHLayout: (x: number) => number;
  toVLayout: (x: number) => number;
};

export const gridLayoutContextDefault = {
  layout: [],
  onChange: () => null,
  onChangeFinalState: () => null,
  colWidth: 10,
  setColWidth: () => null,
  cols: 12,
  rowHeight: 80,
  toHPixels: () => 0,
  toVPixels: () => 0,
  toHLayout: () => 0,
  toVLayout: () => 0,
};

export const GridLayoutContext = React.createContext<ContextProps>(
  gridLayoutContextDefault,
);
