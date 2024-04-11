import clsx from 'clsx';
import { forwardRef } from 'react';

import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/Toast/index.module.css';

import type { ToastType } from '@/components/ui/Toast/type';
import type { ComponentProps } from 'react';

type Props = {
  type: ToastType;
  message: string;
  isActive: boolean;
};

const getIconProps = (type: Props['type']): Omit<ComponentProps<typeof Icon>, 'size'> => {
  switch (type) {
    case 'success':
      return { name: 'alert-square', colorType: 'green' };
    case 'error':
      return { name: 'alert-square', colorType: 'red' };
    case 'info':
      return { name: 'alert-square', colorType: 'blue' };
    case 'warning':
      return { name: 'alert-square', colorType: 'yellow' };
  }
};

/**
 * Please use `/libs/toast/useToast.ts` to show a toast.
 */
export const Toast = forwardRef<HTMLDivElement, Props>(({ type, message, isActive }, ref) => {
  return (
    <div ref={ref} role='alert' data-type={type} className={clsx(styles.toast, isActive ? '' : styles.hide)}>
      <Icon {...getIconProps(type)} size={24} />

      {message}
    </div>
  );
});

Toast.displayName = 'Toast';
