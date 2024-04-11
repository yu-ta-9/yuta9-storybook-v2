import type { ToastType } from '@/components/ui/Toast/type';

type ToastStore = { key: string; type: ToastType; message: string };

let toasts: ToastStore[] = [];
type Notify = () => void;
const listeners = new Set<Notify>();

export const generateToastStore = () => {
  return {
    notify({ key, type, message }: ToastStore) {
      toasts = [...toasts, { key, type, message }];
      emitChange();
    },
    remove(key: string) {
      toasts = toasts.filter((toast) => toast.key !== key);
      emitChange();
    },
    subscribe(listener: Notify) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot() {
      return toasts;
    },
  };
};

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};
