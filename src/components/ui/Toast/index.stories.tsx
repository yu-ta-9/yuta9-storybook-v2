import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { ToastProvider } from '@/libs/toast/ToastProvider';
import { useToast } from '@/libs/toast/useToast';

import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';

const meta = {
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['internal', 'external'],
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    isActive: true,
    type: 'success',
    message: 'Success message',
  },
};

export const Error: Story = {
  args: {
    isActive: true,
    type: 'error',
    message: 'Error message',
  },
};

export const Info: Story = {
  args: {
    isActive: true,
    type: 'info',
    message: 'Info message',
  },
};

export const Warning: Story = {
  args: {
    isActive: true,
    type: 'warning',
    message: 'Warning message',
  },
};

export const PlaygroundSample: Story = {
  args: {
    isActive: true,
    type: 'success',
    message: 'Success message',
  },
  render: function Comp() {
    const Children: FC = () => {
      const { showToast } = useToast();

      return (
        <Button
          type='button'
          theme='main'
          onClick={() => showToast({ type: 'success', message: 'message!!' })}
          label='Open Toast'
        />
      );
    };

    return (
      <ToastProvider>
        <Children />
      </ToastProvider>
    );
  },
};
