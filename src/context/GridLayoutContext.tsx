import * as React from 'react';

import type { Layout } from '../declarations';

type ContextProps = {
  layout: Layout;
  onChange: (layout: Layout) => void;
  onChangeFinalState: (layout: Layout) => void;
  colWidth: number;
  setColWidth: (colWidth: number) => void;
  cols: number;
  rowHeight: number;
  animation: number;
  toHPixels: (x: number) => number;
  toVPixels: (x: number) => number;
  toHLayout: (x: number) => number;
  toVLayout: (x: number) => number;
  isAfterAdjustInitialSize: boolean;
  showAfterAdjustInitialSize: boolean;
};

export const gridLayoutContextDefault = {
  layout: [],
  onChange: () => null,
  onChangeFinalState: () => null,
  colWidth: 10,
  setColWidth: () => null,
  cols: 12,
  rowHeight: 80,
  animation: 0.2,
  toHPixels: () => 0,
  toVPixels: () => 0,
  toHLayout: () => 0,
  toVLayout: () => 0,
  isAfterAdjustInitialSize: false,
  showAfterAdjustInitialSize: true,
};

export const GridLayoutContext = React.createContext<ContextProps>(
  gridLayoutContextDefault,
);
