import { PopulationNextResponse } from '@/types/population';

export async function fetchPopulation(
  type: string,
  prefCode: string,
): Promise<PopulationNextResponse | undefined> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(
      `${API_URL}/api/population/${type}?prefCode=${prefCode}`,
      {
        cache: 'force-cache',
      },
    );
    const prefectureResponse = await res.json();

    return prefectureResponse;
  } catch (error) {
    return undefined;
  }
}
