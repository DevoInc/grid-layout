import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta = {
  title: 'Examples/Collision with priority',
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

export const Collisionwithpriority: Story = {
  args: {
    rowHeight: 24,
    initialLayout: [
      { w: 3, h: 10, x: 4, y: 0, i: '1' },
      { w: 3, h: 9, x: 3, y: 10, i: '2', priority: 1 },
      { w: 4, h: 14, x: 0, y: 0, i: '3' },
    ],
  },
};
