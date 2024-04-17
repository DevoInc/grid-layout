import type { TMatrix } from './declarations';

export const removeMatrixItem = (matrix: TMatrix, id: string) => {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === id) {
        matrix[y][x] = null;
      }
    }
  }
};
