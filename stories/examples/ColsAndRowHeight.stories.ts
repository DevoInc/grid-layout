import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta = {
  title: 'Examples/Cols and row height',
  component: Demo,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
      rightPanelWidth: 0,
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colsandrowheight: Story = {
  args: {
    initialLayout: [
      { x: 0, y: 0, w: 2, h: 8, i: 'W1' },
      { x: 2, y: 0, w: 2, h: 8, i: 'W2' },
      { x: 0, y: 8, w: 6, h: 2, i: 'W3' },
    ],
    cols: 6,
    rowHeight: 20,
  },
};
