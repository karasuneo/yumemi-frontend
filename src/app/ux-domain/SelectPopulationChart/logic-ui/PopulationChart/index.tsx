'use client';

import { ChartDataset } from 'chart.js';
import { useEffect, useState } from 'react';

import { usePopulation } from '@/app/hooks/usePopulation';
import { ArrowButton } from '@/app/ui-domain/ArrowButton';
import { Chart } from '@/app/ui-domain/Chart';
import { POPULATION_TYPE } from '@/const/population';
import { PopulationType } from '@/types/population';
import { getRandomColor } from '@/utils/color';

import styles from './style.module.scss';

type Props = {
  prefCodes: number[];
};

export function PopulationChart({ prefCodes }: Props) {
  const { population, getPopulation } = usePopulation();

  const [datasets, setDatasets] = useState<ChartDataset<'line', number[]>[]>();
  const [populationType, setPopulationType] = useState<PopulationType>('total');

  const handleChangePopulationType = (direction: 'prev' | 'next') => {
    switch (populationType) {
      case 'total':
        setPopulationType(direction === 'next' ? 'under' : 'elderly');
        break;
      case 'under':
        setPopulationType(direction === 'next' ? 'working' : 'total');
        break;
      case 'working':
        setPopulationType(direction === 'next' ? 'elderly' : 'under');
        break;
      case 'elderly':
        setPopulationType(direction === 'next' ? 'total' : 'working');
        break;
      default:
        setPopulationType('total');
    }
  };

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
    <>
      <div className={styles.arrowContainer}>
        <ArrowButton
          direction="left"
          onClick={() => handleChangePopulationType('prev')}
        />
        <h3 className={styles.chartText}>
          {prefCodes.length === 0 ?
            '都道府県を選択してください' :
            `${POPULATION_TYPE[populationType]}グラフ`}
        </h3>
        <ArrowButton
          direction="right"
          onClick={() => handleChangePopulationType('next')}
        />
      </div>
      <div className={styles.chart}>
        <Chart
          labels={population ? population.years : []}
          datasets={datasets || []}
        />
      </div>
    </>
  );
}
