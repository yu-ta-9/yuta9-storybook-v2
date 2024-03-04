import { clsx } from 'clsx';
import { forwardRef } from 'react';

import styles from '@/components/ui/Button/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { ButtonThemes } from '@/components/ui/Button/type';
import type { IconName } from '@/components/ui/Icon/type';
import type { IconColorType } from '@/components/ui/Icon/type';
import type { ComponentProps } from 'react';

type Props = {
  theme: ButtonThemes;
  label: string;
  iconName?: IconName;
  fullWidth?: boolean;
} & ComponentProps<'button'>;

const THEME_CLASSES: { [key in ButtonThemes]: string } = {
  main: styles.main,
  danger: styles.danger,
} as const;

const ICON_COLOR_TYPES: { [key in ButtonThemes]: IconColorType } = {
  main: 'light',
  danger: 'light',
} as const;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ theme = 'main', label, iconName, fullWidth, ...buttonProps }, ref) => {
    return (
      <button
        {...buttonProps}
        className={clsx(styles.button, THEME_CLASSES[theme], fullWidth ? styles.fullWidth : '')}
        ref={ref}
      >
        {iconName !== undefined && (
          <Icon name={iconName} size={16} colorType={buttonProps.disabled ? 'light' : ICON_COLOR_TYPES[theme]} />
        )}

        {label}
      </button>
    );
  },
);

Button.displayName = 'Button';
