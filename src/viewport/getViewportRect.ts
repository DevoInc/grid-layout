import { type TRect } from '../math';
import type { TViewport } from './declarations';

export const getViewportRect = (viewport: TViewport): TRect => ({
  x: 0,
  y: Math.max(viewport.scroll - viewport.falloff, 0),
  w: viewport.width,
  h: viewport.height + 2 * viewport.falloff,
});
