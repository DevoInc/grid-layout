import * as React from 'react';

import { GridLayoutContext } from '../../context';
import type { LayoutItem } from '../../declarations';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Placeholder: React.FC<Props> = ({
  children,
  disabled = false,
}) => {
  const { layout, toHPixels, toVPixels, animation, animationTimingFunction } =
    React.useContext(GridLayoutContext);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const movedItem = layout.find(
      (item: LayoutItem) => item.placeholder === 'move',
    );
    const div = ref.current;
    if (movedItem) {
      div.style.display = 'block';
      div.style.left = `${toHPixels(movedItem.x)}px`;
      div.style.top = `${toVPixels(movedItem.y)}px`;
      div.style.width = `${toHPixels(movedItem.w)}px`;
      div.style.height = `${toVPixels(movedItem.h)}px`;
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
