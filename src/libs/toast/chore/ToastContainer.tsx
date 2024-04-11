import { useRef, useState, useLayoutEffect } from 'react';

import { Toast } from '@/components/ui/Toast';
import { useToastStore } from '@/libs/toast/chore';

import type { FC, ComponentProps } from 'react';

const ToastWrapper: FC<{ id: string } & Omit<ComponentProps<typeof Toast>, 'isActive'>> = ({ id, message, type }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);

  const { remove } = useToastStore();

  useLayoutEffect(() => {
    if (ref.current === null) return;

    let timer: NodeJS.Timeout;
    const node = ref.current;
    const onAnimationEnd = () => {
      if (isActive) {
        timer = setTimeout(() => {
          setIsActive(false);
        }, 3000);
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
  }, [isActive, id, remove]);

  return <Toast ref={ref} type={type} message={message} isActive={isActive} />;
};

export const ToastContainer: FC = () => {
  const { snapshot } = useToastStore();

  return (
    <div id='toast-container'>
      {snapshot.map(({ key, message, type }) => (
        <ToastWrapper key={key} id={key} type={type} message={message} />
      ))}
    </div>
  );
};
