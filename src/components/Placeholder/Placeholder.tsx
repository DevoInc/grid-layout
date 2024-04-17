import * as React from 'react';

import { GridLayoutContext } from '../../context';
import type { TLayoutItem } from '../../declarations';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Placeholder: React.FC<Props> = ({
  children,
  disabled = false,
}) => {
  const { layout, colWidth, rowHeight, animation, animationTimingFunction } =
    React.useContext(GridLayoutContext);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const movedItem = layout.find(
      (item: TLayoutItem) => item.placeholder === 'move',
    );
    const div = ref.current;
    if (movedItem) {
      div.style.display = 'block';
      div.style.left = `${movedItem.x * colWidth}px`;
      div.style.top = `${movedItem.y * rowHeight}px`;
      div.style.width = `${movedItem.w * colWidth}px`;
      div.style.height = `${movedItem.h * rowHeight}px`;
    } else {
      div.style.display = 'none';
    }
  }, [layout]);

  return disabled ? null : (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        zIndex: 0,
        display: 'none',
        transition: `all ${animation}s ${animationTimingFunction}`,
      }}
    >
      {children}
    </div>
  );
};
