import { useEffect } from 'react';

import { usePrefecture } from '@/hooks/usePrefecture';
import { Prefecture } from '@/types/prefecture';
import { CheckBox } from '@/ui-domain/CheckBox';
import { Spinner } from '@/ui-domain/Spinner';

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
    <div className={styles.container}>
      {!prefectures ? (
        <Spinner />
      ) : (
        prefectures!.result.map((prefecture: Prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            onChange={handleChangeSelectedPrefecture(prefecture.prefCode)}
            label={prefecture.prefName}
          />
        ))
      )}
    </div>
  );
}
