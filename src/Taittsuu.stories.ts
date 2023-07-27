import type { Meta, StoryObj } from '@storybook/react';

import { Taittsuu } from './Taittsuu';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Taittsuu',
  component: Taittsuu,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Taittsuu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Taittsuu',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Taittsuu',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Taittsuu',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Taittsuu',
  },
};
