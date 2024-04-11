import { useRef, useSyncExternalStore } from 'react';

import { generateToastStore } from '@/libs/toast/chore/store';

export const useToastStore = () => {
  const { notify, remove, subscribe, getSnapshot } = useRef(generateToastStore()).current;
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return { snapshot, notify, remove };
};
