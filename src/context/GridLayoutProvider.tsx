import * as React from 'react';

import { type Layout, layoutToPixels, pixelsToLayout } from '../physics';
import { GridLayoutContext } from './GridLayoutContext';

type Props = {
  children: React.ReactNode;
  layout: Layout;
  onChange: (layout: Layout) => void;
  onChangeFinalState: (layout: Layout) => void;
  cols?: number;
  rowHeight?: number;
  animation?: number;
};

export const GridLayoutProvider: React.FC<Props> = ({
  children,
  layout,
  onChange,
  onChangeFinalState,
  cols = 12,
  rowHeight = 80,
  animation = 0.2,
}) => {
  const [colWidth, setColWidth] = React.useState(10);

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
        toHPixels,
        toHLayout,
        toVPixels,
        toVLayout,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
};