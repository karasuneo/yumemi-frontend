'use client';

import { useCallback, useState } from 'react';

import { PopulationChartLayout } from './logic-ui/PopulationChart/Layout';
import { SelectPrefectureLayout } from './logic-ui/SelectPrefecture/Layout';

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
        <SelectPrefectureLayout
          handleChangeSelectedPrefecture={handleChangeSelectedPrefecture}
        />
      </section>
      <section>
        <PopulationChartLayout prefCodes={prefCodes} />
      </section>
    </>
  );
}
