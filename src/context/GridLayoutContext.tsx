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
  animationTimingFunction: string;
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
  animation: 0.1,
  isAfterAdjustInitialSize: false,
  showAfterAdjustInitialSize: true,
  animationTimingFunction: 'linear',
};

export const GridLayoutContext = React.createContext<ContextProps>(
  gridLayoutContextDefault,
);
