import * as React from 'react';

import { GridLayoutContext } from '../../context';
import { useItem } from '../../hook';

type Props = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  children?: React.ReactNode;
  disabled?: boolean;
};

const hGap = 16;
const vGap = 16;
const padding = 8;

export const ItemWrapper: React.FC<Props> = ({
  id,
  x,
  y,
  w,
  h,
  children,
  disabled,
}) => {
  const { toHPixels, toVPixels, cols, animation } =
    React.useContext(GridLayoutContext);
  const { setNodeRef, style, attributes, isDragging } = useItem({
    id,
    disabledMove: disabled,
    disabledResize: disabled,
  });

  const prev = React.useRef({ x, y });
  const { rx, ry } = React.useMemo(() => {
    if (!isDragging) {
      prev.current.x = x;
      prev.current.y = y;
    }
    return {
      rx: prev.current.x,
      ry: prev.current.y,
    };
  }, [isDragging, x, y]);

  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        position: 'absolute',
        zIndex: isDragging ? 3 : 2,
        left: `${rx > 0 ? toHPixels(rx) + hGap / 2 : toHPixels(rx) + padding}px`,
        top: `${ry > 0 ? toVPixels(ry) + vGap / 2 : toVPixels(ry) + padding}px`,
        width: `${rx + w >= cols ? toHPixels(w) - padding * 2 : toHPixels(w) - hGap / 2}px`,
        height: `${toVPixels(h) - vGap / 2}px`,
        ...(!isDragging ? { transition: `all ${animation}s` } : {}),
      }}
      data-id={id}
      {...attributes}
    >
      {children}
    </div>
  );
};
