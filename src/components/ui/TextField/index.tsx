import { forwardRef, useId } from 'react';

import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/TextField/index.module.css';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  required?: boolean;
  errorMessage?: string;
} & ComponentProps<'input'>;

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, required, errorMessage, ...textFieldProps }, ref) => {
    const isError = !!errorMessage;
    const id = useId();
    const errorId = `${id}-error`;

    return (
      <div className={styles.textField}>
        <label htmlFor={id}>
          {label}

          {required && <Icon name='asterisk' size={8} theme='error' />}
        </label>
        <input
          {...textFieldProps}
          className={isError ? styles.error : undefined}
          ref={ref}
          id={id}
          required={required}
          aria-invalid={isError}
          aria-errormessage={errorId}
        />

        {isError && (
          <span className={styles.errorText} id={errorId}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
