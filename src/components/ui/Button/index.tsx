import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from '@/components/ui/Button/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { IconTheme, IconName } from '@/components/ui/Icon/type';
import type { ComponentProps } from 'react';

type ButtonTheme = 'primary' | 'error';

type Props = {
  theme: ButtonTheme;
  label: string;
  iconName?: IconName;
  fullWidth?: boolean;
} & ComponentProps<'button'>;

const getIconTheme = (theme: ButtonTheme): IconTheme => {
  switch (theme) {
    case 'primary':
      return 'onPrimary';
    case 'error':
      return 'onError';
  }
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ theme = 'primary', label, iconName, fullWidth, ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        data-theme={theme}
        className={clsx(styles.button, fullWidth ? styles.fullWidth : '')}
        ref={ref}
      >
        {iconName !== undefined && (
          <Icon name={iconName} size={16} theme={buttonProps.disabled ? 'onSurface' : getIconTheme(theme)} />
        )}

        {label}
      </button>
    );
  },
);

Button.displayName = 'Button';
