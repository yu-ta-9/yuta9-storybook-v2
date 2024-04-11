import { useRef, useState, useLayoutEffect } from 'react';

import { Toast } from '@/components/ui/Toast';
import { useToastStore } from '@/libs/toast/chore';
import styles from '@/libs/toast/chore/toast-container.module.css';

import type { ToastState } from '@/components/ui/Toast/type';
import type { FC, ComponentProps } from 'react';

const ToastWrapper: FC<{ id: string } & Omit<ComponentProps<typeof Toast>, 'state'>> = ({ id, message, type }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ToastState>('entering');

  const { remove } = useToastStore();

  useLayoutEffect(() => {
    if (ref.current === null) return;

    let timer: NodeJS.Timeout;
    const node = ref.current;
    const onAnimationEnd = () => {
      if (state === 'entering') {
        timer = setTimeout(() => {
          setState('exiting');
        }, 3000);
      } else if (state === 'exiting') {
        timer = setTimeout(() => {
          setState('exited');
        }, 0);
      } else {
        timer = setTimeout(() => {
          remove(id);
        }, 350);
      }
    };
    node.addEventListener('animationend', onAnimationEnd);

    return () => {
      node.removeEventListener('animationend', onAnimationEnd);
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [id, remove, state]);

  return <Toast ref={ref} type={type} message={message} state={state} />;
};

export const ToastContainer: FC = () => {
  const { snapshot } = useToastStore();

  return (
    <div id='toast-container' className={styles.toastContainer}>
      {snapshot.map(({ key, message, type }) => (
        <ToastWrapper key={key} id={key} type={type} message={message} />
      ))}
    </div>
  );
};
