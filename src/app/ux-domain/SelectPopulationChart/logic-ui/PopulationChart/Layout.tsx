'use client';

import { useState } from 'react';

import { ArrowButton } from '@/app/ui-domain/ArrowButton';
import { POPULATION_TYPE } from '@/const';
import { PopulationType } from '@/types/population';

import styles from './style.module.scss';

import { PopulationChart } from '.';

type Props = {
  prefCodes: number[];
};

export function PopulationChartLayout({ prefCodes }: Props) {
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

  return (
    <>
      <div className={styles.arrowContainer}>
        <ArrowButton
          direction="left"
          onClick={() => handleChangePopulationType('prev')}
        />

        <h2 className={styles.chartText}>
          {prefCodes.length === 0 ?
            '都道府県を選択してください' :
            `${POPULATION_TYPE[populationType]}グラフ`}
        </h2>

        <ArrowButton
          direction="right"
          onClick={() => handleChangePopulationType('next')}
        />
      </div>
      <div className={styles.chart}>
        <PopulationChart
          prefCodes={prefCodes}
          populationType={populationType}
        />
      </div>
    </>
  );
}
