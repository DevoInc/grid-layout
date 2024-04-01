import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import { GridLayoutContext } from '../../context';
import { findById } from '../../layout';
import type { EventType } from '../../declarations';
import type { TRect } from '../../math';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const ResizeHelper: React.FC<Props> = ({
  children,
  disabled = false,
}) => {
  const { layout, colWidth, rowHeight, cols } =
    React.useContext(GridLayoutContext);

  const ref = React.useRef<HTMLDivElement>(null);
  const init = React.useRef<TRect>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      const id = active.data.current?.id ?? '';
      const eventType: EventType = active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));
      if (item && eventType === 'resize') {
        init.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        const div = ref.current;
        div.style.display = 'block';
        div.style.zIndex = '100';
        div.style.cursor = 'se-resize';
      }
    },
    onDragMove: ({ active, delta }) => {
      const id = active.data.current?.id ?? '';
      const eventType: EventType = active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));
      const div = ref.current;
      if (item && eventType === 'resize' && init.current) {
        div.style.left = `${item.x * colWidth}px`;
        div.style.top = `${item.y * rowHeight}px`;
        div.style.width = `${Math.min(
          init.current.w * colWidth + delta.x,
          Math.min(item?.maxW ?? Infinity, cols - init.current.x) * colWidth,
        )}px`;
        div.style.height = `${Math.min(
          init.current.h * rowHeight + delta.y,
          item?.maxH * rowHeight ?? Infinity,
        )}px`;
      }
    },
    onDragEnd: ({ active }) => {
      const eventType: EventType = active.data.current?.type ?? 'move';
      if (eventType === 'resize') {
        const div = ref.current;
        div.style.display = 'none';
        div.style.zIndex = '0';
        div.style.cursor = 'auto';
      }
    },
  });

  return disabled ? null : (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        zIndex: 0,
        display: 'none',
      }}
    >
      {children}
    </div>
  );
};
