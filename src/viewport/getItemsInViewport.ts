import type { TLayout } from '../declarations';
import type { TViewport } from './declarations';
import { scaleLayout } from '../layout';
import { hasCollision } from '../physics';
import { getViewportRect } from './getViewportRect';

export const getItemsInViewport = (
  layout: TLayout,
  colWidth: number,
  rowHeight: number,
  viewport: TViewport,
) =>
  scaleLayout(layout, colWidth, rowHeight)
    .filter((item) => hasCollision(item, getViewportRect(viewport)))
    .map((item) => item.i);
