import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import { findById } from '../layout';
import { GridLayoutContext } from '../context';
import type { EventType, LayoutItem } from '../declarations';
import { setItemProps, removeItemProp } from '../physics/modification';
import type { TRect } from '../math';

export const useLayoutUpdate = () => {
  const { toHLayout, toVLayout, layout, onChange, onChangeFinalState, cols } =
    React.useContext(GridLayoutContext);
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
      console.log(event);
      const id = event.active.data.current?.id ?? '';
      const eventType: EventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id));

      if (init.current && item) {
        const next = { ...init.current };

        const deltaX = toHLayout(event.delta.x);
        const deltaY = toVLayout(event.delta.y);

        if (eventType === 'move') {
          next.x += deltaX;
          next.y += deltaY;
        } else if (eventType === 'resize') {
          const nextW = next.w + deltaX;
          const nextH = next.h + deltaY;

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
