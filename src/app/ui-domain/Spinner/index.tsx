import styles from './style.module.scss';

export function Spinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayInner}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}
