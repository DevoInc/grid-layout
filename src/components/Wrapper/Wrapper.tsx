import * as React from 'react';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensors,
  useSensor,
} from '@dnd-kit/core';

import { restrictToParentElement } from '../../modifiers';

interface Props {
  children: React.ReactNode;
}

export const Wrapper: React.FC<Props> = ({ children }) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { distance: 5 },
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <DndContext sensors={sensors} modifiers={[restrictToParentElement]}>
      {children}
    </DndContext>
  );
};
