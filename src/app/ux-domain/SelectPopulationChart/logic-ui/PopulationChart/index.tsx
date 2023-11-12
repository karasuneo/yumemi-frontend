'use client';

import { ChartDataset } from 'chart.js';
import { useEffect, useState } from 'react';

import { Chart } from '@/app/ui-domain/Chart';
import { usePopulation } from '@/hooks/usePopulation';
import { PopulationType } from '@/types/population';
import { getRandomColor } from '@/utils/color';

type Props = {
  prefCodes: number[];
  populationType: PopulationType;
};

export function PopulationChart({ prefCodes, populationType }: Props) {
  const { population, getPopulation } = usePopulation();
  const [datasets, setDatasets] = useState<ChartDataset<'line', number[]>[]>();

  useEffect(() => {
    if (!population) {
      return;
    }

    setDatasets(
      population.populationData.map((pData) => ({
        label: pData.prefName,
        data: pData.data,
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor(),
      })),
    );
  }, [population]);

  useEffect(() => {
    (async () => {
      await getPopulation({
        populationType,
        prefCode: prefCodes.join(','),
      });
    })();
  }, [prefCodes, populationType]);

  return (
    <Chart
      labels={population ? population.years : []}
      datasets={datasets || []}
    />
  );
}
