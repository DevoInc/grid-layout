import type { Meta, StoryObj } from '@storybook/react';

import { Demo } from '../components';

const meta = {
  title: 'Examples/Large example',
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

export const Largeexample: Story = {
  args: {
    initialLayout: new Array(100)
      .fill(null)
      .map((_, index) => [
        { x: 0, y: index * 10, w: 6, h: 4, i: String(index * 3 + 1) },
        { x: 6, y: index * 10, w: 6, h: 4, i: String(index * 3 + 2) },
        { x: 0, y: index * 10 + 4, w: 12, h: 6, i: String(index * 3 + 3) },
      ])
      .reduce((prev, cur) => prev.concat(cur), []),
  },
};
