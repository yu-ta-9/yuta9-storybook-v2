import clsx from 'clsx';
import { type ReactElement, useId, useState, type FC } from 'react';

import styles from '@/components/ui/Accordion/index.module.css';

type Props = {
  label: string;
  innerElement: ReactElement;
};

export const Accordion: FC<Props> = ({ label, innerElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = useId();

  return (
    <div className={styles.accordion}>
      <button
        className={styles.button}
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
      </button>

      <div
        id={panelId}
        aria-labelledby={buttonId}
        role='region'
        className={clsx(styles.inner, isOpen ? '' : styles.hide)}
      >
        {innerElement}
      </div>
    </div>
  );
};
