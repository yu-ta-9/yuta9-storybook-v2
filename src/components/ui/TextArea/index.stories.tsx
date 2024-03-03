import { TextArea } from '@/components/ui/TextArea';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

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
