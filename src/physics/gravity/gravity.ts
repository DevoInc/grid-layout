import type { TLayout } from '../../declarations';
import { sortLayout } from '../../layout';
import {
  getUpperSpace,
  getMatrixFromLayout,
  removeMatrixItem,
  addMatrixItem,
} from '../../matrix';

export const gravity = (layout: TLayout) => {
  const matrix = getMatrixFromLayout(layout);
  const sortedLayout = sortLayout(layout);
  const newLayout = layout.map((item) => ({ ...item }));

  for (const item of sortedLayout) {
    const mutatedItem = newLayout.find((it) => it.i === item.i);
    const moveSpaces = getUpperSpace(matrix, mutatedItem);
    if (moveSpaces > 0) {
      removeMatrixItem(matrix, mutatedItem.i);
      mutatedItem.y -= moveSpaces;
      addMatrixItem(matrix, mutatedItem);
    }
  }

  return newLayout;
};
