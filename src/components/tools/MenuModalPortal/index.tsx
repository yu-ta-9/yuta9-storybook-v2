import styles from '@/components/tools/MenuModalPortal/index.module.css';
import { useMenuModalPortal } from '@/components/tools/MenuModalPortal/useMenuModalPortal.hook';

import type { FC, ReactElement, ReactNode } from 'react';

type Props = {
  buttonElement: ReactElement;
  menuElement: ReactNode;
  verticalPosition: 'top' | 'bottom';
  horizontalPosition: 'left' | 'right';
  verticalOffset?: number;
  horizontalOffset?: number;
  'area-label'?: string;
};

export const MenuModalPortal: FC<Props> = ({
  buttonElement,
  menuElement,
  verticalPosition,
  horizontalPosition,
  verticalOffset,
  horizontalOffset,
  'area-label': areaLabel,
}) => {
  const { modalRef, modalId, position, cloneButtonElement, isOpen, handleClose } = useMenuModalPortal({
    buttonElement,
    verticalPosition,
    horizontalPosition,
    verticalOffset,
    horizontalOffset,
  });

  return (
    <>
      {cloneButtonElement}

      {isOpen && (
        <>
          {/* MEMO: disable eslint to be overlay */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div className={styles.overlay} onClick={handleClose} onKeyUp={handleClose} />

          <div
            ref={modalRef}
            className={styles.container}
            role='dialog'
            style={{
              top: position.top,
              right: position.right,
              bottom: position.bottom,
              left: position.left,
            }}
            aria-label={areaLabel}
            aria-hidden={!isOpen}
            aria-modal='true'
            id={modalId}
          >
            {menuElement}
          </div>
        </>
      )}
    </>
  );
};
