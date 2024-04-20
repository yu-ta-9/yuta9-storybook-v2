import { forwardRef, memo, useId } from 'react';

import styles from '@/components/ui/CheckboxWithCustomIcon/index.module.css';
import { Icon } from '@/components/ui/Icon';

import type { ComponentProps } from 'react';

type Props = {
  label: string;
  isError?: boolean;
  indeterminate?: boolean;
} & ComponentProps<'input'>;

type State = 'indeterminate' | 'unchecked' | 'checked' | 'disabled';

const getState = ({
  indeterminate,
  disabled,
  checked,
}: {
  indeterminate: boolean;
  disabled: boolean;
  checked: boolean;
}): State => {
  return indeterminate ? 'indeterminate' : disabled ? 'disabled' : checked ? 'checked' : 'unchecked';
};

const getIcon = (state: State) => {
  switch (state) {
    case 'disabled':
      return <Icon name='square-off' size={24} colorType='dark' />;
    case 'indeterminate':
      return <Icon name='square-minus' size={24} colorType='dark' />;
    case 'checked':
      return <Icon name='square-check' size={24} colorType='dark' />;
    case 'unchecked':
      return <Icon name='square' size={24} colorType='dark' />;
    default:
      return null;
  }
};

const _CheckboxWithCustomIcon = forwardRef<HTMLInputElement, Props>(
  ({ label, isError, indeterminate, ...inputProps }, ref) => {
    const id = useId();

    return (
      <label className={styles.checkboxWithCustomIcon}>
        {getIcon(
          getState({
            indeterminate: !!indeterminate,
            disabled: inputProps.disabled ?? false,
            checked: inputProps.checked ?? false,
          }),
        )}
        <input {...inputProps} ref={ref} type='checkbox' aria-labelledby={id} aria-invalid={isError} />
        <span id={id} className={styles.label}>
          {label}
        </span>
      </label>
    );
  },
);

_CheckboxWithCustomIcon.displayName = '_CheckboxWithCustomIcon';

export const CheckboxWithCustomIcon = memo(_CheckboxWithCustomIcon);
