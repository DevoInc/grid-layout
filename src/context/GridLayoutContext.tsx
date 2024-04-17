import * as React from 'react';

import type { TLayout } from '../declarations';

type ContextProps = {
  layout: TLayout;
  onChange: (layout: TLayout) => void;
  onChangeFinalState: (layout: TLayout) => void;
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
  animation: 0,
  isAfterAdjustInitialSize: false,
  showAfterAdjustInitialSize: true,
  animationTimingFunction: 'linear',
};

export const GridLayoutContext = React.createContext<ContextProps>(
  gridLayoutContextDefault,
);
