import { createContext } from 'react';

import type { ToastType } from '@/components/ui/Toast/type';

type Values = {
  showToast: (args: { type: ToastType; message: string }) => void;
};

export const ToastContext = createContext<Values>({} as Values);
