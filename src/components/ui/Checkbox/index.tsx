import { forwardRef, memo, useId } from 'react';

import styles from '@/components/ui/Checkbox/index.module.css';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  isError?: boolean;
} & ComponentProps<'input'>;

const _Checkbox = forwardRef<HTMLInputElement, Props>(({ label, isError, ...inputProps }, ref) => {
  const id = useId();

  return (
    <label className={styles.checkbox}>
      <input {...inputProps} ref={ref} type='checkbox' aria-labelledby={id} aria-invalid={isError} />
      <span id={id} className={styles.label}>
        {label}
      </span>
    </label>
  );
});

_Checkbox.displayName = '_Checkbox';

export const Checkbox = memo(_Checkbox);
