import { PrefectureResponse } from '@/types/prefecture';

export async function fetchPrefectures(): Promise<
  PrefectureResponse | undefined
  > {
  const API_URL = process.env.NEXT_PUBLIC_RESAS_API_URL!;
  const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY!;

  const response = await fetch(`${API_URL}/api/v1/prefectures`, {
    headers: { 'X-API-KEY': API_KEY },
  });

  if (!response) {
    return undefined;
  }

  const prefectureData: PrefectureResponse = await response.json();

  return prefectureData;
}
