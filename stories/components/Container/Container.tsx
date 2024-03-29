import * as React from 'react';
import { useTheme } from 'styled-components';

import { type Brand } from '@devoinc/genesys-brand-devo';

import { GridLayout, type Layout } from '../../../src';
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
    <GridLayout.Provider
      layout={layout}
      onChange={onChange}
      onChangeFinalState={onChangeFinalState}
      cols={cols}
      rowHeight={rowHeight}
      animation={0.1}
    >
      <GridLayout.Wrapper>
        <GridLayout.Container bgColor={tokens.alias.color.background.app}>
          {layout.map((item) => (
            <GridLayout.ItemWrapper
              id={item.i}
              x={item.x}
              y={item.y}
              w={item.w}
              h={item.h}
              key={item.i}
              disabled={disabled}
            >
              <Item
                id={item.i}
                content={item.data?.content as string}
                disabled={disabled}
              />
            </GridLayout.ItemWrapper>
          ))}
          <GridLayout.Placeholder>
            <Placeholder
              bgColor={
                tokens.alias.color.background.surface.backdrop.base.weaker
              }
            />
          </GridLayout.Placeholder>
          <GridLayout.ResizeHelper>
            <Placeholder
              bgColor={
                tokens.alias.color.background.surface.backdrop.base.weaker
              }
            />
          </GridLayout.ResizeHelper>
        </GridLayout.Container>
      </GridLayout.Wrapper>
    </GridLayout.Provider>
  );
};
