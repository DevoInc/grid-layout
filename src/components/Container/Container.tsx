import * as React from 'react';

import { getHigherPoint } from '../../layout';
import { GridLayoutContext } from '../../context';
import { useLayoutUpdate } from '../../hook';

type Props = {
  children: React.ReactNode;
  bgColor?: string;
};

export const Container: React.FC<Props> = ({
  children,
  bgColor = 'rgb(240, 243, 245)',
}) => {
  const { layout, rowHeight } = React.useContext(GridLayoutContext);
  useLayoutUpdate();

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minWidth: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        minHeight: '100%',
        height: `${getHigherPoint(layout) * rowHeight}px`,
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};
