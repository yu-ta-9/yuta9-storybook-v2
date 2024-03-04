import { Button } from '@/components/ui/Button';
import { BUTTON_THEMES } from '@/components/ui/Button/const';

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
        options: BUTTON_THEMES,
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

export const Main: Story = {
  args: {
    theme: 'main',
    label: 'Button',
    type: 'button',
    onClick: () => alert('Click!!'),
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    theme: 'danger',
    label: 'Button',
    type: 'button',
    onClick: () => alert('Click!!'),
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    theme: 'main',
    label: 'Button',
    type: 'button',
    iconName: 'folder',
    onClick: () => alert('Click!!'),
  },
};
