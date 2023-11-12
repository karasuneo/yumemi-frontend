import styles from './style.module.scss';

type Props = {
  direction: 'left' | 'right';
  onClick?: () => void;
};

export function ArrowButton({ direction, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {direction === 'right' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="82"
          width="82"
          viewBox="0 -960 960 960"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="82"
          width="82"
          viewBox="0 -960 960 960"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      )}
    </button>
  );
}
