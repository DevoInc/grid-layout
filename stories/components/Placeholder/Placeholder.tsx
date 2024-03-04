import * as React from 'react';

import { StyledPlaceholder } from './StyledPlaceholder';

type Props = {
  bgColor?: string;
  over?: boolean;
};

export const Placeholder: React.FC<Props> = ({
  bgColor = '#ccc',
  over = false,
}) => {
  return (
    <StyledPlaceholder bgColor={bgColor} over={over}>
      <div></div>
    </StyledPlaceholder>
  );
};
