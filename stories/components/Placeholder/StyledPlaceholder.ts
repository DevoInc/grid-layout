import styled from 'styled-components';

type Props = {
  $bgColor: string;
};

export const StyledPlaceholder = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 8px 0 0 8px;

  div {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: ${({ $bgColor }) => $bgColor};
  }
`;
