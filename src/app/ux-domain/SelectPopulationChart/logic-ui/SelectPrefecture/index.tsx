import { useEffect } from 'react';

import { CheckBox } from '@/app/ui-domain/CheckBox';
import { Spinner } from '@/app/ui-domain/Spinner';
import { usePrefecture } from '@/hooks/usePrefecture';
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
      {!prefectures ? (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.checkboxContainer}>
          {prefectures!.result.map((prefecture: Prefecture) => (
            <CheckBox
              key={prefecture.prefCode}
              onChange={handleChangeSelectedPrefecture(prefecture.prefCode)}
              label={prefecture.prefName}
            />
          ))}
        </div>
      )}
    </>
  );
}
