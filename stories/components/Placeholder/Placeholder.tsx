import * as React from 'react';

import { StyledPlaceholder } from './StyledPlaceholder';

type Props = {
  bgColor?: string;
};

export const Placeholder: React.FC<Props> = ({ bgColor = '#ccc' }) => (
  <StyledPlaceholder $bgColor={bgColor}>
    <div></div>
  </StyledPlaceholder>
);
