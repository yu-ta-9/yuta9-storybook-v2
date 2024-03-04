import { forwardRef, type ComponentProps } from 'react';

import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/IconButton/index.module.css';

import type { IconColorType, IconName } from '@/components/ui/Icon/type';

type Props = {
  ariaLabel: string;
  iconName: IconName;
  size: number;
  colorType?: IconColorType;
} & ComponentProps<'button'>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ ariaLabel, iconName, size, colorType = 'dark', ...buttonProps }, ref) => {
    return (
      <button {...buttonProps} ref={ref} className={styles.iconButton} aria-label={ariaLabel}>
        <Icon name={iconName} size={size} colorType={colorType} />
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
