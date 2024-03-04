import { IconButton } from '@/components/ui/IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'Go down',
    iconName: 'chevronDown',
    size: 24,
    colorType: 'dark',
    onClick: () => alert('Clicked!!'),
  },
};
