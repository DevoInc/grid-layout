import * as React from 'react';

import type { Layout } from '../declarations';
import { layoutToPixels, pixelsToLayout } from '../physics';
import { GridLayoutContext } from './GridLayoutContext';

type Props = {
  children: React.ReactNode;
  layout: Layout;
  onChange: (layout: Layout) => void;
  onChangeFinalState: (layout: Layout) => void;
  cols?: number;
  rowHeight?: number;
  animation?: number;
  animationTimingFunction?: string;
  showAfterAdjustInitialSize?: boolean;
};

export const GridLayoutProvider: React.FC<Props> = ({
  children,
  layout,
  onChange,
  onChangeFinalState,
  cols = 12,
  rowHeight = 80,
  animation = 0.1,
  animationTimingFunction = 'linear',
  showAfterAdjustInitialSize = true,
}) => {
  const [colWidth, setColWidth] = React.useState(0);

  const toHPixels = React.useCallback(layoutToPixels(colWidth), [colWidth]);
  const toHLayout = React.useCallback(pixelsToLayout(colWidth), [colWidth]);
  const toVPixels = React.useCallback(layoutToPixels(rowHeight), [rowHeight]);
  const toVLayout = React.useCallback(pixelsToLayout(rowHeight), [rowHeight]);

  return (
    <GridLayoutContext.Provider
      value={{
        layout,
        onChange: (newLayout: Layout) => {
          onChange(newLayout);
        },
        onChangeFinalState,
        cols,
        rowHeight,
        colWidth,
        setColWidth,
        animation,
        animationTimingFunction,
        toHPixels,
        toHLayout,
        toVPixels,
        toVLayout,
        isAfterAdjustInitialSize: colWidth > 0,
        showAfterAdjustInitialSize,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};
