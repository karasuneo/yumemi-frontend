'use client';

import { useCallback, useState } from 'react';

import { PopulationChartLayout } from './logic-ui/PopulationChart/Layout';
import { SelectPrefecture } from './logic-ui/SelectPrefecture';
import styles from './style.module.scss';

export function SelectPopulationChart() {
  const [prefCodes, setPrefCodes] = useState<number[]>([]);

  const handleChangeSelectedPrefecture = useCallback(
    (prefCode: number) => (selected: boolean) => {
      if (selected) {
        setPrefCodes([...prefCodes, prefCode]);
      } else {
        setPrefCodes(prefCodes.filter((code) => code !== prefCode));
      }
    },
    [prefCodes],
  );

  return (
    <>
      <section>
        <div className={styles.textContainer}>
          <h2 className={styles.text}>都道府県を選択</h2>
        </div>
        <div className={styles.prefectureContainer}>
          <SelectPrefecture
            handleChangeSelectedPrefecture={handleChangeSelectedPrefecture}
          />
        </div>
      </section>
      <section>
        <PopulationChartLayout prefCodes={prefCodes} />
      </section>
    </>
  );
}
