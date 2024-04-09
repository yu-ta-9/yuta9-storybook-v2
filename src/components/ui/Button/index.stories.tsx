import { Button } from '@/components/ui/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'danger'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'primary',
    label: 'Button',
    type: 'button',
    onClick: () => console.info('click!!'),
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    theme: 'primary',
    label: 'Button',
    type: 'button',
    iconName: 'file',
    onClick: () => console.info('click!!'),
  },
};
