import * as React from 'react';
import { useTheme } from 'styled-components';
import { useSize, useScroll } from 'ahooks';

import { type Brand } from '@devoinc/genesys-brand-devo';

import {
  GridLayout,
  getItemsInViewport,
  scaleLayout,
  type TLayout,
} from '../../../src';
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
  const ref = React.useRef<HTMLDivElement>(null);
  const size = useSize(ref);
  const tokens = useTheme() as Brand;

  const $container = (ref.current as HTMLDivElement)?.parentElement;
  const viewportSize: DOMRect | null = $container
    ? $container.getBoundingClientRect()
    : null;
  const scroll = useScroll($container);
  const itemsInViewport = getItemsInViewport(
    scaleLayout(layout, (size?.width ?? 0) / cols, rowHeight),
    {
      width: Infinity,
      height: viewportSize?.height ?? 0,
      xScroll: 0,
      yScroll: scroll?.top ?? 0,
      falloff: (viewportSize?.height ?? 0) / 2,
    },
  );

  return (
    <div ref={ref} style={{ height: '100%' }}>
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
                  {itemsInViewport.includes(item.i) && (
                    <Item
                      id={item.i}
                      content={item.data?.content as string}
                      disabled={disabled}
                      x={item.x}
                      y={item.y}
                      w={item.w}
                      h={item.h}
                    />
                  )}
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
