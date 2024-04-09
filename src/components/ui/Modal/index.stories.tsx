import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button theme='primary' label='Open modal' type='button' onClick={() => setIsOpen(true)} disabled={false} />
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h2 style={{ marginBottom: 16 }}> Modal Body</h2>

            <Button
              theme='primary'
              label='Close modal'
              type='button'
              onClick={() => setIsOpen(false)}
              disabled={false}
            />
          </div>
        </Modal>
      </div>
    );
  },
};
