import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from './components';

const meta = {
  title: 'Scroll',
  component: Demo,
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scroll: Story = {
  args: {
    initialLayout: new Array(20).fill(null).map((_, index) => ({
      x: 0,
      y: index * 2,
      w: 2,
      h: 2,
      i: `W${index + 1}`,
    })),
  },
};
