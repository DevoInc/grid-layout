import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import { GridLayoutContext } from '../../context';
import { LayoutItemRect, findById } from '../../layout';
import { EventType } from '../../declarations';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Placeholder: React.FC<Props> = ({
  children,
  disabled = false,
}) => {
  const { layout, toHPixels, toVPixels, cols } =
    React.useContext(GridLayoutContext);

  const ref = React.useRef<HTMLDivElement>(null);
  const init = React.useRef<LayoutItemRect | null>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      const id = active.data.current?.id ?? '';
      const eventType: EventType = active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));
      if (ref.current && item) {
        init.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        const div = ref.current;
        div.style.display = 'block';
        if (eventType === 'resize') {
          div.style.zIndex = '100';
          div.style.cursor = 'se-resize';
        }
      }
    },
    onDragMove: ({ active, delta }) => {
      const id = active.data.current?.id ?? '';
      const eventType: EventType = active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));
      if (item && ref.current) {
        const div = ref.current;
        if (eventType === 'move') {
          div.style.left = `${toHPixels(item.x)}px`;
          div.style.top = `${toVPixels(item.y)}px`;
          div.style.width = `${toHPixels(item.w)}px`;
          div.style.height = `${toVPixels(item.h)}px`;
        } else if (eventType === 'resize' && init.current) {
          div.style.left = `${toHPixels(item.x)}px`;
          div.style.top = `${toVPixels(item.y)}px`;
          div.style.width = `${Math.min(
            toHPixels(init.current.w) + delta.x,
            toHPixels(Math.min(item?.maxW ?? Infinity, cols - init.current.x)),
          )}px`;
          div.style.height = `${Math.min(
            toVPixels(init.current.h) + delta.y,
            toVPixels(item?.maxH ?? Infinity),
          )}px`;
        }
      }
    },
    onDragEnd: ({ active }) => {
      const eventType: EventType = active.data.current?.type ?? 'move';
      if (ref.current) {
        const div = ref.current;
        div.style.display = 'none';
        if (eventType === 'resize') {
          div.style.zIndex = '0';
          div.style.cursor = 'auto';
        }
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
