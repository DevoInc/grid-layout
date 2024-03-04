import styled from 'styled-components';

export const StyledResizeHandler = styled.div`
  padding: 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  cursor: se-resize;
  &::after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid
      ${({ theme }) => theme.alias.color.border.surface.base.base};
    border-bottom: 2px solid
      ${({ theme }) => theme.alias.color.border.surface.base.base};
  }
`;
