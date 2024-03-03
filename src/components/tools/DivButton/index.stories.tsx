import { DivButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DivButton> = {
  component: DivButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Push me',
    tabIndex: 0,
    onClick: () => {
      alert('Hello, DivButton!');
    },
  },
};
