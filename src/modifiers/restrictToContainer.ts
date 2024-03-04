import type { Modifier } from '@dnd-kit/core';
import { restrictToBoundingRect } from './restrictToBoundingRect';

export const restrictToParentElement: Modifier = ({
  containerNodeRect,
  draggingNodeRect,
  transform,
  active,
  activatorEvent,
}) => {
  if (!draggingNodeRect || !containerNodeRect) {
    return transform;
  }

  return restrictToBoundingRect(
    transform,
    draggingNodeRect,
    active?.data.current?.type === 'resize'
      ? (
          (activatorEvent?.target as HTMLDivElement).parentNode
            ?.parentNode as HTMLDivElement
        ).getBoundingClientRect()
      : containerNodeRect,
  );
};
