import { useCallback, useState } from 'react';

import { fetchPopulation } from '@/api/population';
import { PopulationNextResponse, PopulationType } from '@/types/population';

type Props = {
  prefCode: string;
  populationType: PopulationType;
};

export const usePopulation = () => {
  const [population, setPopulation] = useState<PopulationNextResponse>();

  const getPopulation = useCallback(
    async ({ prefCode, populationType }: Props) => {
      const populationRes = await fetchPopulation(populationType, prefCode);
      if (!populationRes) {
        return;
      }
      setPopulation(populationRes);
    },
    [],
  );

  return { getPopulation, population };
};
