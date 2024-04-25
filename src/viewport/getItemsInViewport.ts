import type { TLayout } from '../declarations';
import type { TViewport } from './declarations';
import { hasCollision } from '../physics';
import { getViewportRect } from './getViewportRect';

export const getItemsInViewport = (layout: TLayout, viewport: TViewport) =>
  layout
    .filter((item) => hasCollision(item, getViewportRect(viewport)))
    .map((item) => item.i);
