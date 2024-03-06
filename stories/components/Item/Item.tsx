import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { type Brand } from '@devoinc/genesys-brand-devo';
import { Flex, Panel, Typography } from '@devoinc/genesys-ui';

import { GridLayoutContext, useItem } from '../../../src';
import { StyledItem } from './StyledItem';
import { StyledResizeHandler } from './StyledResizeHandler';

type Props = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  content?: string;
  disabled?: boolean;
};

const hGap = 16;
const vGap = 16;
const padding = 8;

export const Item: React.FC<Props> = ({
  id,
  x,
  y,
  w,
  h,
  content,
  disabled,
}) => {
  const theme = useTheme() as Brand;
  const [selected, setSelected] = React.useState(false);
  const { toHPixels, toVPixels, cols } = React.useContext(GridLayoutContext);
  const {
    setNodeRef,
    style,
    attributes,
    listeners,
    isDragging,
    resizeListeners,
  } = useItem({
    id,
    disabledMove: disabled,
    disabledResize: disabled,
  });

  const prev = React.useRef({ x, y });
  const { rx, ry } = React.useMemo(() => {
    if (!isDragging) {
      prev.current.x = x;
      prev.current.y = y;
    }
    return {
      rx: prev.current.x,
      ry: prev.current.y,
    };
  }, [isDragging, x, y]);

  return (
    <StyledItem
      ref={setNodeRef}
      style={style}
      data-id={id}
      x={rx > 0 ? toHPixels(rx) + hGap / 2 : toHPixels(rx) + padding}
      y={ry > 0 ? toVPixels(ry) + vGap / 2 : toVPixels(ry) + padding}
      w={rx + w >= cols ? toHPixels(w) - padding * 2 : toHPixels(w) - hGap / 2}
      h={toVPixels(h) - vGap / 2}
      {...attributes}
      isDragging={isDragging}
    >
      <Panel
        height={'100%'}
        draggable={true}
        elevation={isDragging ? 'draggable' : 'raised'}
        styles={{
          borderColor: selected ? 'red' : 'none',
        }}
      >
        <Flex
          alignItems={'center'}
          as={'header'}
          flex="0 0 auto"
          zIndex={1}
          styles={css`
            cursor: ${isDragging ? 'grabbing' : 'pointer'};
            border-bottom: 1px solid ${theme.cmp.panel.header.color.border};
            padding: ${theme.cmp.panel.header.space.padding.xs};

            &:empty {
              display: none;
            }
          `}
          {...listeners}
          onClick={() => {
            setSelected((prev) => !prev);
          }}
        >
          <Typography.Paragraph size={'xs'}>{id}</Typography.Paragraph>
        </Flex>
        <Panel.Body>
          <Typography.Paragraph>
            {content ? content : `Content of ${id}`}
          </Typography.Paragraph>
        </Panel.Body>
      </Panel>
      <StyledResizeHandler {...resizeListeners} />
    </StyledItem>
  );
};
