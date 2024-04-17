import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import type { TEventType, TLayout, TLayoutItem } from '../../declarations';
import type { TRect } from '../../math';
import { GridLayoutContext } from '../../context';
import { areLayoutEquals, findById, removeProp } from '../../layout';

export const useLayoutUpdate = () => {
  const { colWidth, rowHeight, layout, onChange, cols } =
    React.useContext(GridLayoutContext);
  const init = React.useRef<TRect>(null);
  const lastMoved = React.useRef<TRect>(null);
  const initialLayout = React.useRef<TLayout>(null);

  useDndMonitor({
    onDragStart: (event) => {
      const id = event.active.data.current?.id ?? '';
      const eventType: TEventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id)) as TLayoutItem;
      initialLayout.current = layout.map((item) => ({ ...item }));
      if (item) {
        // store the initial position of the element
        init.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        // prevent trigger the movement every time the element is moved
        lastMoved.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        // mark the element as placeholder
        onChange(
          layout.map((it) =>
            it.i === id ? { ...it, placeholder: eventType } : it,
          ),
        );
      }
    },

    onDragMove: (event) => {
      const id = event.active.data.current?.id ?? '';
      const eventType: TEventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));

      if (init.current && item) {
        const next = { ...init.current };

        if (eventType === 'move') {
          next.x = Math.floor((next.x * colWidth + event.delta.x) / colWidth);
          next.y = Math.ceil((next.y * rowHeight + event.delta.y) / rowHeight);
        } else if (eventType === 'resize') {
          const nextW = Math.floor(
            (next.w * colWidth + event.delta.x) / colWidth,
          );
          const nextH = Math.floor(
            (next.h * rowHeight + event.delta.y) / rowHeight,
          );

          next.w =
            nextW >= (item?.minW ?? 1) &&
            nextW <= Math.min(item?.maxW ?? Infinity, cols - item.x)
              ? nextW
              : item?.w ?? 1;
          next.h =
            nextH >= (item?.minH ?? 1) && nextH <= (item?.maxH ?? Infinity)
              ? nextH
              : item?.h ?? 1;
        }

        // Check against the last position
        if (
          next.x !== lastMoved.current.x ||
          next.y !== lastMoved.current.y ||
          next.w !== lastMoved.current.w ||
          next.h !== lastMoved.current.h
        ) {
          lastMoved.current = { ...next };
          onChange(
            layout.map((it) =>
              it.i === id ? { ...it, ...next, priority: Infinity } : it,
            ),
          );
        }
      }
    },

    onDragEnd: () => {
      const newLayout = removeProp(layout, 'placeholder');
      // Emit a final state only when the layout is changed at some point
      onChange(newLayout, !areLayoutEquals(initialLayout.current, newLayout));
    },
  });
};
