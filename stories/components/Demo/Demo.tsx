import * as React from 'react';

import { AppLayout } from '@devoinc/genesys-ui';

import { type TLayout, solidGravityDynamic } from '../../../src';
import { Container } from '../Container';

type Props = {
  initialLayout?: TLayout;
  cols?: number;
  rowHeight?: number;
  disabled?: boolean;
  debug?: boolean;
};

export const Demo: React.FC<Props> = ({
  initialLayout = [],
  cols = 12,
  rowHeight = 80,
  disabled = false,
  debug = false,
}) => {
  // Compact at initial layout
  const [layout, setLayout] = React.useState<TLayout>(
    solidGravityDynamic(initialLayout),
  );
  return (
    <AppLayout>
      <AppLayout.Content padding={'0'}>
        <Container
          layout={layout}
          onChange={(layout, final) => {
            // compact on any change to the layout
            setLayout(solidGravityDynamic(layout));
            if (final) {
              // eslint-disable-next-line
              console.log('onFinalChange', layout);
            }
          }}
          cols={cols}
          rowHeight={rowHeight}
          disabled={disabled}
          debug={debug}
        />
      </AppLayout.Content>
    </AppLayout>
  );
};
