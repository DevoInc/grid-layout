import styled from 'styled-components';

import { type LayoutItemRect } from '../../../src';

type Props = LayoutItemRect & {
  isDragging: boolean;
};

export const StyledItem = styled.div<Props>`
  position: absolute;
  z-index: ${({ isDragging }) => (isDragging ? 3 : 2)};
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
`;
