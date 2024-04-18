import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta = {
  title: 'Examples/Scroll',
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

export const Scroll: Story = {
  args: {
    initialLayout: new Array(20).fill(null).map((_, index) => ({
      x: 0,
      y: index,
      w: 6,
      h: 1,
      i: `W${index + 1}`,
    })),
  },
};
