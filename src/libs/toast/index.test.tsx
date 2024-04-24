import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToastProvider } from '@/libs/toast/ToastProvider';
import { useToast } from '@/libs/toast/useToast';

import type { ToastType } from '@/components/ui/Toast/type';
import type { FC } from 'react';

const user = userEvent.setup();

const ToastComponent: FC<{ type: ToastType; message: string }> = ({ type, message }) => {
  const { showToast } = useToast();
  return <button onClick={() => showToast({ type, message })}>show</button>;
};

describe('ToastProvider', () => {
  test('success', async () => {
    render(
      <ToastProvider>
        <ToastComponent type='success' message='Success' />
      </ToastProvider>,
    );

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toHaveTextContent('Success');
  });
});
