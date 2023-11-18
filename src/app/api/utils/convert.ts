import { POPULATION_TYPE_NUM } from '@/const/population';
import { PopulationNextResponse } from '@/types/population';
import { Prefecture, PrefectureResponse } from '@/types/prefecture';

import { fetchPopulation } from '../fetcher/population';

export async function convertNextPopulationResponse(
  type: string,
  prefCodesInt: number[],
  prefectureResponse: PrefectureResponse,
): Promise<PopulationNextResponse | undefined> {
  const populationNextResponse: PopulationNextResponse = {
    label: '',
    years: [],
    populationData: [],
  };

  async function innerConvertNextPopulationResponse(typeNum: number) {
    await Promise.all(
      prefCodesInt.map(async (prefCodeInt) => {
        const populationResponse = await fetchPopulation(prefCodeInt);
        if (!populationResponse) {
          return;
        }

        populationNextResponse.label =
          populationResponse.result.data[typeNum].label;
        populationNextResponse.years = populationResponse.result.data[
          typeNum
        ].data.map((data) => data.year);
        populationNextResponse.populationData.push({
          prefName: prefectureResponse.result.find(
            (prefecture: Prefecture) => prefecture.prefCode === prefCodeInt,
          )?.prefName!,
          data: populationResponse!.result.data[typeNum].data.map(
            (data) => data.value,
          ),
        });
      }),
    );
  }

  if (type === 'total') {
    await innerConvertNextPopulationResponse(POPULATION_TYPE_NUM[type]);
  } else if (type === 'under') {
    await innerConvertNextPopulationResponse(POPULATION_TYPE_NUM[type]);
  } else if (type === 'working') {
    await innerConvertNextPopulationResponse(POPULATION_TYPE_NUM[type]);
  } else if (type === 'elderly') {
    await innerConvertNextPopulationResponse(POPULATION_TYPE_NUM[type]);
  }

  if (!populationNextResponse) {
    return undefined;
  }

  return populationNextResponse;
}

export function sortPopulationNextResponse(
  populationNextResponse: PopulationNextResponse,
) {
  populationNextResponse.populationData.sort((a, b) => {
    const nameA = a.prefName.toUpperCase();
    const nameB = b.prefName.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
}
