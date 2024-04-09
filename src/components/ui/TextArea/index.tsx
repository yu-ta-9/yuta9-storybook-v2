import { forwardRef, useId } from 'react';

import { Icon } from '@/components/ui/Icon';
import styles from '@/components/ui/TextArea/index.module.css';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  required?: boolean;
  errorMessage?: string;
} & ComponentProps<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, required, errorMessage, ...textFieldProps }, ref) => {
    const isError = !!errorMessage;
    const id = useId();
    const errorId = `${id}-error`;

    return (
      <div className={styles.textArea}>
        <label htmlFor={id}>
          {label}

          {required && <Icon name='asterisk' size={8} theme='error' />}
        </label>
        <textarea
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

TextArea.displayName = 'TextArea';
