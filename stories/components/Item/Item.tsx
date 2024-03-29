import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { type Brand } from '@devoinc/genesys-brand-devo';
import { Flex, Panel, Typography } from '@devoinc/genesys-ui';

import { useItem } from '../../../src';
import { StyledResizeHandler } from './StyledResizeHandler';

type Props = {
  id: string;
  content?: string;
  disabled?: boolean;
};

export const Item: React.FC<Props> = ({ id, content, disabled }) => {
  const theme = useTheme() as Brand;
  const [selected, setSelected] = React.useState(false);
  const { listeners, isDragging, resizeListeners } = useItem({
    id,
    disabledMove: disabled,
    disabledResize: disabled,
  });

  return (
    <>
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
    </>
  );
};
