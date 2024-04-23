import * as React from 'react';
import { useTheme } from 'styled-components';
import { useSize } from 'ahooks';

import { type Brand } from '@devoinc/genesys-brand-devo';

import { GridLayout, type TLayout } from '../../../src';
import { Item } from '../Item';
import { Placeholder } from '../Placeholder';

type Props = {
  layout: TLayout;
  onChange: (layout: TLayout, final?: boolean) => void;
  rowHeight?: number;
  cols?: number;
  disabled?: boolean;
};

export const Container: React.FC<Props> = ({
  layout,
  onChange,
  rowHeight = 80,
  cols = 12,
  disabled = false,
}) => {
  const ref = React.useRef(null);
  const size = useSize(ref);
  const tokens = useTheme() as Brand;

  return (
    <div ref={ref}>
      <GridLayout.Provider
        layout={layout}
        onChange={onChange}
        cols={cols}
        rowHeight={rowHeight}
        width={size?.width}
        animation={0.1}
      >
        <GridLayout.Wrapper>
          <GridLayout.Container bgColor={tokens.alias.color.background.app}>
            {(size?.width ?? 0) > 0 &&
              layout.map((item) => (
                <GridLayout.ItemWrapper
                  id={item.i}
                  x={item.x}
                  y={item.y}
                  w={item.w}
                  h={item.h}
                  key={item.i}
                  disabled={disabled}
                  className={'item-wrapper'}
                >
                  <Item
                    id={item.i}
                    content={item.data?.content as string}
                    disabled={disabled}
                    x={item.x}
                    y={item.y}
                    w={item.w}
                    h={item.h}
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
    </div>
  );
};
