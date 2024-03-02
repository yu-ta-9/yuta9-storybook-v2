import { TextField } from '@/components/ui/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    required: true,
    errorMessage: 'Invalid text',
    disabled: true,
  },
};
