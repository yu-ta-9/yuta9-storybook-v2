import { useCallback, type FC } from 'react';
import { createPortal } from 'react-dom';

import { ToastContainer } from '@/libs/toast/chore/ToastContainer';
import { ToastContext } from '@/libs/toast/chore/ToastContext';
import { useToastStore } from '@/libs/toast/chore/useToastStore';

import type { ToastType } from '@/components/ui/Toast/type';

type Props = {
  children: React.ReactNode;
};

const getId = () => {
  return Math.random().toString(36).slice(-8);
};

export const ToastProvider: FC<Props> = ({ children }) => {
  const { notify } = useToastStore();

  const showToast = useCallback(
    ({ type, message }: { type: ToastType; message: string }) => {
      notify({ key: `toast-${getId()}`, type, message });
    },
    [notify],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {createPortal(<ToastContainer />, document.body)}
    </ToastContext.Provider>
  );
};
