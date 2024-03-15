import type { Layout } from '../../declarations';

export const clone = (layout: Layout) => layout.map((l) => ({ ...l }));
