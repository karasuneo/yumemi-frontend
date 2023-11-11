'use client';

import { useReducer } from 'react';

import styles from './style.module.scss';

interface Props {
  label: string;
  initialState?: boolean;
  onChange?: (_: boolean) => void;
}

const noop = (_: boolean) => {};

export function CheckBox({
  label,
  initialState = false,
  onChange = noop,
}: Props) {
  const [state, toggle] = useReducer((_state) => {
    setTimeout(() => onChange(!_state));
    return !_state;
  }, initialState);

  return (
    <label className={styles.label} onClick={toggle}>
      {state ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="switch"
          aria-checked="true"
        >
          <rect width="12" height="12" x="2" y="2" rx="1" />
          <path d="M4 7L7.33333 10.33333l4.66666-4.66666" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="switch"
          aria-checked="false"
        >
          <rect width="12" height="12" x="2" y="2" rx="1" />
        </svg>
      )}
      {label}
    </label>
  );
}
