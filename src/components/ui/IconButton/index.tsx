import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/IconButton/index.module.css';

import type { IconColorType, IconName } from '@/components/ui/Icon/type';
import type { ComponentProps, FC } from 'react';

type Props = {
  ariaLabel: string;
  iconName: IconName;
  size: number;
  colorType?: IconColorType;
} & ComponentProps<'button'>;

export const IconButton: FC<Props> = ({ ariaLabel, iconName, size, colorType = 'dark', ...buttonProps }) => {
  return (
    <button {...buttonProps} className={styles.iconButton} aria-label={ariaLabel}>
      <Icon name={iconName} size={size} colorType={colorType} />
    </button>
  );
};
