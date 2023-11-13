'use client';

import { useCallback, useState } from 'react';

import { PopulationChart } from './logic-ui/PopulationChart';
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
        <SelectPrefecture
          handleChangeSelectedPrefecture={handleChangeSelectedPrefecture}
        />
      </section>
      <section className={styles.populationChartContainer}>
        <PopulationChart prefCodes={prefCodes} />
      </section>
    </>
  );
}
