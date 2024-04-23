import * as React from 'react';

import type { TLayout } from '../declarations';
import { GridLayoutContext } from './GridLayoutContext';

type Props = {
  children: React.ReactNode;
  layout: TLayout;
  onChange: (layout: TLayout, final: boolean) => void;
  cols?: number;
  width?: number;
  rowHeight?: number;
  animation?: number;
  animationTimingFunction?: string;
  showAfterAdjustInitialSize?: boolean;
};

export const GridLayoutContextProvider: React.FC<Props> = ({
  children,
  layout,
  onChange,
  cols = 12,
  rowHeight = 80,
  width = 0,
  animation = 0,
  animationTimingFunction = 'linear',
  showAfterAdjustInitialSize = true,
}) => (
  <GridLayoutContext.Provider
    value={{
      layout,
      onChange: (newLayout: TLayout, final: boolean = false) => {
        onChange(newLayout, final);
      },
      cols,
      colWidth: width / cols,
      rowHeight,
      width,
      animation,
      animationTimingFunction,
      showAfterAdjustInitialSize,
    }}
  >
    {children}
  </GridLayoutContext.Provider>
);
