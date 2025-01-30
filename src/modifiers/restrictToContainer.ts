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

  const type = active?.data.current?.type;
  const activatorEventTarget = activatorEvent?.target as HTMLDivElement;
  const parentContainer = activatorEventTarget?.parentNode
    ?.parentNode as HTMLDivElement;
  const parentContainerRect =
    type === 'resize' && parentContainer
      ? parentContainer.getBoundingClientRect()
      : containerNodeRect;

  return restrictToBoundingRect(
    transform,
    draggingNodeRect,
    parentContainerRect,
  );
};
