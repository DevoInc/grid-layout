import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta: Meta<typeof Demo> = {
  title: 'Examples/Disabled',
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

export const Disabled: Story = {
  render: (args, { globals: { debug } }) => {
    return <Demo {...args} debug={debug} />;
  },
  args: {
    disabled: true,
    initialLayout: [
      { x: 0, y: -2, w: 2, h: 2, i: '1' },
      { x: -2, y: 0, w: 2, h: 2, i: '2' },
      { x: 0, y: 1, w: 20, h: 2, i: '3' },
      { x: 0, y: 2, w: 2, h: 2, i: '4' },
      { x: 20, y: 0, w: 2, h: 2, i: '5' },
      { x: -2, y: -2, w: 20, h: 2, i: '6' },
    ],
  },
};
