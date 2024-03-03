import clsx from 'clsx';
import { memo, useCallback } from 'react';

import styles from '@/components/tools/DivButton/index.module.css';

import type { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tabIndex: number;
  onClick: () => void;
} & ComponentProps<'div'>;

const _DivButton: FC<Props> = ({ children, tabIndex, onClick, ...divProps }) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  return (
    <div
      {...divProps}
      className={clsx(styles.divButton, divProps.className)}
      tabIndex={tabIndex}
      role='button'
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};

export const DivButton = memo(_DivButton);
