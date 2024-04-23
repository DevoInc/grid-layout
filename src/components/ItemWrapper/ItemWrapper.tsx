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
  className?: string;
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
  className,
}) => {
  const { colWidth, rowHeight, cols, animation, animationTimingFunction } =
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
        left: `${rx > 0 ? rx * colWidth + hGap / 2 : rx * colWidth + padding}px`,
        top: `${ry > 0 ? ry * rowHeight + vGap / 2 : ry * rowHeight + padding}px`,
        width: `${rx + w >= cols ? w * colWidth - padding * 2 : w * colWidth - hGap / 2}px`,
        height: `${h * rowHeight - vGap / 2}px`,
        ...(!isDragging
          ? { transition: `all ${animation}s ${animationTimingFunction}` }
          : {}),
      }}
      data-id={id}
      className={className}
      {...attributes}
    >
      {children}
    </div>
  );
};
