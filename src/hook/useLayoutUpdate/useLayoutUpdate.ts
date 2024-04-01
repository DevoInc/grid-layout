import * as React from 'react';
import { useDndMonitor } from '@dnd-kit/core';

import type { EventType, LayoutItem } from '../../declarations';
import type { TRect } from '../../math';
import { GridLayoutContext } from '../../context';
import { setItemProps, removeItemProp, findById } from '../../layout';
import { getContainerScroll } from './getContainerScroll';

export const useLayoutUpdate = () => {
  const { colWidth, rowHeight, layout, onChange, onChangeFinalState, cols } =
    React.useContext(GridLayoutContext);
  const init = React.useRef<TRect>(null);
  const lastMoved = React.useRef<TRect>(null);
  // Store the initial scroll offset for the movement
  const initialOffset = React.useRef(null);

  useDndMonitor({
    onDragStart: (event) => {
      const id = event.active.data.current?.id ?? '';
      const eventType: EventType = event.active.data.current?.type ?? 'move';
      const item = layout.find(findById(id)) as LayoutItem;
      initialOffset.current = null;
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

      const offsetY = getContainerScroll(event.activatorEvent as MouseEvent);
      if (initialOffset.current === null) {
        initialOffset.current = offsetY;
      }

      if (init.current && item) {
        const next = { ...init.current };

        if (eventType === 'move') {
          next.x = Math.floor((next.x * colWidth + event.delta.x) / colWidth);
          next.y = Math.ceil(
            (next.y * rowHeight +
              event.delta.y +
              (initialOffset.current - offsetY)) /
              rowHeight,
          );
          console.log(next.y);
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
          onChange(setItemProps(layout)(id, { ...next, priority: 1 }));
        }
      }
    },
    onDragEnd: (event) => {
      initialOffset.current = null;
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
