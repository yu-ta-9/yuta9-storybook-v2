import { useContext } from 'react';

import { ToastContext } from '@/libs/toast/chore/ToastContext';

export const useToast = () => {
  return { ...useContext(ToastContext) };
};
