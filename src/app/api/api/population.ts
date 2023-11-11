import { PopulationResponse } from '@/types/population';

export async function fetchPopulation(
  prefCode: number,
): Promise<PopulationResponse | undefined> {
  const API_URL = process.env.NEXT_PUBLIC_RESAS_API_URL!;
  const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY!;

  try {
    const response = await fetch(
      `${API_URL}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
      { headers: { 'X-API-KEY': API_KEY } },
    );
    const populationResponse: PopulationResponse = await response.json();

    return populationResponse;
  } catch (e) {
    return undefined;
  }
}
