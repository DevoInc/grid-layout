import { useDraggable } from '@dnd-kit/core';

type Props = {
  id: string;
  disabledMove?: boolean;
  disabledResize?: boolean;
};

export const useItem = ({
  id,
  disabledMove = false,
  disabledResize = false,
}: Props) => {
  // Apply draggable hook
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `${id}-dragging`,
      disabled: disabledMove,
      data: {
        type: 'move',
        id,
      },
    });

  // Apply draggable hook
  const { listeners: resizeListeners } = useDraggable({
    id: `${id}-resizing`,
    disabled: disabledResize,
    data: {
      type: 'resize',
      id,
    },
  });

  // generate the style attribute
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return {
    attributes,
    listeners,
    resizeListeners,
    setNodeRef,
    transform,
    isDragging,
    style,
  };
};
