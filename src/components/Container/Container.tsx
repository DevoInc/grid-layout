import * as React from 'react';

import { getHigherPoint } from '../../layout';
import { GridLayoutContext } from '../../context';
import { useResizeOberver, useLayoutUpdate } from '../../hook';

type Props = {
  children: React.ReactNode;
  bgColor?: string;
};

export const Container: React.FC<Props> = ({
  children,
  bgColor = 'rgb(240, 243, 245)',
}) => {
  const { layout, toVPixels, isAfterAdjustInitialSize } =
    React.useContext(GridLayoutContext);
  const { ref } = useResizeOberver();
  useLayoutUpdate();

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: bgColor,
        minWidth: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        minHeight: '100%',
        height: `${toVPixels(getHigherPoint(layout))}px`,
        position: 'relative',
      }}
    >
      {isAfterAdjustInitialSize ? children : null}
    </div>
  );
};
