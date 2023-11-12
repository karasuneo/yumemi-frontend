import styles from './style.module.scss';

import { SelectPrefecture } from '.';

type Props = {
  handleChangeSelectedPrefecture: (
    _prefCode: number,
  ) => (_selected: boolean) => void;
};

export function SelectPrefectureLayout({
  handleChangeSelectedPrefecture,
}: Props) {
  return (
    <>
      <div className={styles.textContainer}>
        <h2>都道府県を選択</h2>
      </div>
      <div className={styles.prefectureContainer}>
        <SelectPrefecture
          handleChangeSelectedPrefecture={handleChangeSelectedPrefecture}
        />
      </div>
    </>
  );
}
