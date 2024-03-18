import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import type { EventType, LayoutItem } from '../declarations';
import type { TRect } from '../math';
import { GridLayoutContext } from '../context';
import { setItemProps, removeItemProp, findById } from '../layout';

export const useLayoutUpdate = () => {
  const {
    toHLayout,
    toVLayout,
    toHPixels,
    toVPixels,
    layout,
    onChange,
    onChangeFinalState,
    cols,
  } = React.useContext(GridLayoutContext);
  const init = React.useRef<TRect>(null);
  const lastMoved = React.useRef<TRect>(null);

  useDndMonitor({
    onDragStart: (event) => {
      const id = event.active.data.current?.id ?? '';
      const eventType: EventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id)) as LayoutItem;
      if (item) {
        // store the initial position of the element
        init.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        // prevent trigger the movement every time the element is moved
        lastMoved.current = { x: item.x, y: item.y, w: item.w, h: item.h };
        // mark the element as placeholder
        onChange(setItemProps(layout)(id, { placeholder: eventType }));
      }
    },
    onDragMove: (event) => {
      const id = event.active.data.current?.id ?? '';
      const eventType: EventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));

      if (init.current && item) {
        const next = { ...init.current };

        const deltaX = event.delta.x;
        const deltaY = event.delta.y;

        if (eventType === 'move') {
          next.x = toHLayout(toHPixels(next.x) + event.delta.x);
          next.y = toVLayout(toVPixels(next.y) + event.delta.y);
        } else if (eventType === 'resize') {
          const nextW = toHLayout(toHPixels(next.w) + deltaX);
          const nextH = toVLayout(toVPixels(next.h) + deltaY);

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
          onChange(setItemProps(layout)(id, { ...next, priority: 1 }));
        }
      }
    },
    onDragEnd: (event) => {
      const id = event.active.data.current?.id ?? '';
      const item = layout.find(findById(id));
      const newLayout = removeItemProp(layout)(id, 'placeholder');
      onChange(newLayout);
      if (
        item &&
        (item.x !== init.current.x ||
          item.y !== init.current.y ||
          item.w !== init.current.w ||
          item.h !== init.current.h)
      ) {
        // Emit a final state only when the layout is changed at some point
        onChangeFinalState(newLayout);
      }
    },
  });
};
