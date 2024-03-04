import * as React from 'react';

import { AppLayout } from '@devoinc/genesys-ui';

import { type Layout, compact } from '../../../src';
import { Container } from '../Container';

type Props = {
  initialLayout?: Layout;
  cols?: number;
  rowHeight?: number;
  disabled?: boolean;
};

export const Demo: React.FC<Props> = ({
  initialLayout = [],
  cols = 12,
  rowHeight = 80,
  disabled = false,
}) => {
  const [layout, setLayout] = React.useState<Layout>(initialLayout);
  const layoutCompact = compact(layout);
  return (
    <AppLayout.Container>
      <AppLayout.Content padding={'0'}>
        <Container
          layout={layoutCompact}
          onChange={(layout) => {
            setLayout(layout);
          }}
          onChangeFinalState={(layout) => {
            console.log('onFinalChange', layout);
          }}
          cols={cols}
          rowHeight={rowHeight}
          disabled={disabled}
        />
      </AppLayout.Content>
    </AppLayout.Container>
  );
};
