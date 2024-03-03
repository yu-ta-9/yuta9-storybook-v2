import { useState } from 'react';

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
        <button type='button' onClick={() => setIsOpen(true)}>
          Open modal
        </button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h2> Modal Body</h2>

            <button type='button' onClick={() => setIsOpen(false)} style={{ marginTop: 16 }}>
              Close modal
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};
