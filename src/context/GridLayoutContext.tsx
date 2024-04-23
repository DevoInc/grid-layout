import * as React from 'react';

import type { TLayout } from '../declarations';

type ContextProps = {
  layout: TLayout;
  onChange: (layout: TLayout, final?: boolean) => void;
  cols: number;
  colWidth: number;
  width: number;
  rowHeight: number;
  animation: number;
  animationTimingFunction: string;
  showAfterAdjustInitialSize: boolean;
};

export const gridLayoutContextDefault = {
  layout: [],
  onChange: () => null,
  colWidth: 0,
  cols: 12,
  width: 0,
  rowHeight: 80,
  animation: 0,
  showAfterAdjustInitialSize: true,
  animationTimingFunction: 'linear',
};

export const GridLayoutContext = React.createContext<ContextProps>(
  gridLayoutContextDefault,
);
