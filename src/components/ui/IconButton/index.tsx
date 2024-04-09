import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/IconButton/index.module.css';

import type { ComponentProps, FC } from 'react';

type Props = {
  ariaLabel: string;
} & ComponentProps<typeof Icon> &
  ComponentProps<'button'>;

export const IconButton: FC<Props> = ({ ariaLabel, name, size, theme = 'primary', ...buttonProps }) => {
  return (
    <button {...buttonProps} className={styles.iconButton} aria-label={ariaLabel}>
      <Icon name={name} size={size} theme={theme} />
    </button>
  );
};
