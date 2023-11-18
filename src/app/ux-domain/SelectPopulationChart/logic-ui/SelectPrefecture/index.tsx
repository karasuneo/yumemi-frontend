import { useEffect } from 'react';

import { usePrefecture } from '@/app/hooks/usePrefecture';
import { CheckBox } from '@/app/ui-domain/CheckBox';
import { Spinner } from '@/app/ui-domain/Spinner';
import { Prefecture } from '@/types/prefecture';

import styles from './style.module.scss';

type Props = {
  handleChangeSelectedPrefecture: (
    _prefCode: number,
  ) => (_selected: boolean) => void;
};

export function SelectPrefecture({ handleChangeSelectedPrefecture }: Props) {
  const { getPrefecture, prefectures } = usePrefecture();

  useEffect(() => {
    (async () => {
      await getPrefecture();
    })();
  }, []);

  return (
    <>
      <div className={styles.textContainer}>
        <h3>都道府県を選択</h3>
      </div>
      <div className={styles.prefectureContainer}>
        {!prefectures ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          <div className={styles.gridContainer}>
            {prefectures!.result.map((prefecture: Prefecture) => (
              <CheckBox
                key={prefecture.prefCode}
                onChange={handleChangeSelectedPrefecture(prefecture.prefCode)}
                label={prefecture.prefName}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
