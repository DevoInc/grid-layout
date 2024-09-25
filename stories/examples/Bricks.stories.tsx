import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta: Meta<typeof Demo> = {
  title: 'Examples/Bricks',
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

export const Bricks: Story = {
  render: (args, { globals: { debug } }) => {
    return <Demo {...args} debug={debug} />;
  },
  args: {
    initialLayout: [
      { x: 1, y: 0, w: 2, h: 1, i: '17' },
      { x: 4, y: 0, w: 3, h: 1, i: '1' },
      { x: 8, y: 0, w: 2, h: 1, i: '18' },
      { x: 3, y: 1, w: 2, h: 1, i: '3' },
      { x: 6, y: 1, w: 2, h: 1, i: '2' },
      { x: 2, y: 2, w: 2, h: 1, i: '4' },
      { x: 7, y: 2, w: 2, h: 1, i: '5' },
      { x: 1, y: 3, w: 2, h: 1, i: '6' },
      { x: 8, y: 3, w: 2, h: 1, i: '8' },
      { x: 0, y: 4, w: 2, h: 1, i: '7' },
      { x: 9, y: 4, w: 2, h: 1, i: '9' },
      { x: 1, y: 5, w: 2, h: 1, i: '10' },
      { x: 8, y: 5, w: 2, h: 1, i: '14' },
      { x: 2, y: 6, w: 2, h: 1, i: '12' },
      { x: 7, y: 6, w: 2, h: 1, i: '11' },
      { x: 3, y: 7, w: 2, h: 1, i: '13' },
      { x: 6, y: 7, w: 2, h: 1, i: '15' },
      { x: 4, y: 8, w: 3, h: 1, i: '16' },
      { x: 0, y: 9, w: 6, h: 4, i: '19' },
      { x: 6, y: 9, w: 6, h: 4, i: '20' },
    ],
  },
};
