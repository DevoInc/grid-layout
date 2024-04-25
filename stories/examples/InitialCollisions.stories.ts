import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta = {
  title: 'Examples/Initial collisions',
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

export const Initialcollisions: Story = {
  args: {
    initialLayout: [
      { x: 0, y: 0, w: 2, h: 2, i: '1' },
      { x: 0, y: 0, w: 2, h: 2, i: '2' },
      { x: 0, y: 1, w: 2, h: 2, i: '3' },
      { x: 0, y: 2, w: 2, h: 2, i: '4' },
      { x: 10, y: 0, w: 2, h: 2, i: '5' },
      { x: 9, y: 0, w: 2, h: 2, i: '6' },
    ],
  },
};
