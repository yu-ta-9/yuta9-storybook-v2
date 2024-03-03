import ReactModal from 'react-modal';

import styles from '@/components/ui/Modal/index.module.css';

import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      {children}
    </ReactModal>
  );
};
