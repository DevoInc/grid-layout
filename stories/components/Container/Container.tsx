import * as React from 'react';
import { useTheme } from 'styled-components';

import { type Brand } from '@devoinc/genesys-brand-devo';

import { GridLayout, GridLayoutProvider, Layout } from '../../../src';
import { Item } from '../Item';
import { Placeholder } from '../Placeholder';

type Props = {
  layout: Layout;
  onChange: (layout: Layout) => void;
  onChangeFinalState: (layout: Layout) => void;
  rowHeight?: number;
  cols?: number;
  disabled?: boolean;
};

export const Container: React.FC<Props> = ({
  layout,
  onChange,
  onChangeFinalState,
  rowHeight = 80,
  cols = 12,
  disabled = false,
}) => {
  const tokens = useTheme() as Brand;

  return (
    <GridLayoutProvider
      layout={layout}
      onChange={onChange}
      onChangeFinalState={onChangeFinalState}
      cols={cols}
      rowHeight={rowHeight}
    >
      <GridLayout.Wrapper>
        <GridLayout.Container bgColor={tokens.alias.color.background.app}>
          {layout.map((item) => (
            <React.Fragment key={item.i}>
              <Item
                id={item.i}
                x={item.x}
                y={item.y}
                w={item.w}
                h={item.h}
                content={item.data?.content as string}
                disabled={disabled}
              />
            </React.Fragment>
          ))}
          <GridLayout.Placeholder>
            <Placeholder
              bgColor={
                tokens.alias.color.background.surface.backdrop.base.weaker
              }
            />
          </GridLayout.Placeholder>
        </GridLayout.Container>
      </GridLayout.Wrapper>
    </GridLayoutProvider>
  );
};
