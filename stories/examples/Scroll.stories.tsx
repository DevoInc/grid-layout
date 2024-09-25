import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta: Meta<typeof Demo> = {
  title: 'Examples/Scroll',
  component: Demo,
  parameters: {
    layout: 'fullscreen',
    options: {
      bottomPanelHeight: 0,
      rightPanelWidth: 0,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Demo>;

export const Scroll: Story = {
  render: (args, { globals: { debug } }) => {
    return <Demo {...args} debug={debug} />;
  },
  args: {
    initialLayout: Array.from({ length: 50 })
      .fill(null)
      .map((_, index) => ({
        x: 0,
        y: index,
        w: 6,
        h: 1,
        i: String(index + 1),
      })),
  },
};
