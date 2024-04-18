export type TFrame = { x?: number; y?: number; w?: number; h?: number };

export type TItem = {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  p: number;
  f?: TFrame[];
};

export type TProps = 'x' | 'y' | 'w' | 'h';
