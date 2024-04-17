import * as React from 'react';

import type { TLayout } from '../declarations';
import { GridLayoutContext } from './GridLayoutContext';

type Props = {
  children: React.ReactNode;
  layout: TLayout;
  onChange: (layout: TLayout) => void;
  onChangeFinalState: (layout: TLayout) => void;
  cols?: number;
  rowHeight?: number;
  animation?: number;
  animationTimingFunction?: string;
  showAfterAdjustInitialSize?: boolean;
};

export const GridLayoutContextProvider: React.FC<Props> = ({
  children,
  layout,
  onChange,
  onChangeFinalState,
  cols = 12,
  rowHeight = 80,
  animation = 0,
  animationTimingFunction = 'linear',
  showAfterAdjustInitialSize = true,
}) => {
  const [colWidth, setColWidth] = React.useState(0);

  return (
    <GridLayoutContext.Provider
      value={{
        layout,
        onChange: (newLayout: TLayout) => {
          onChange(newLayout);
        },
        onChangeFinalState,
        cols,
        rowHeight,
        colWidth,
        setColWidth,
        animation,
        animationTimingFunction,
        isAfterAdjustInitialSize: colWidth > 0,
        showAfterAdjustInitialSize,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};
