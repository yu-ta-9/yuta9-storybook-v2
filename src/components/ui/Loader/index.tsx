import styles from '@/components/ui/Loader/index.module.css';

import type { FC } from 'react';

type Props = {
  size?: 'small' | 'medium' | 'large';
};

export const Loader: FC<Props> = ({ size = 'medium' }) => {
  return <span className={styles.loader} data-size={size} />;
};
