import { PrefectureNextResponse } from '@/types/prefecture';

export async function fetchPrefectures(): Promise<
  PrefectureNextResponse | undefined
  > {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${API_URL}/api/prefectures`);
    const prefectureNextResponse = await res.json();

    return prefectureNextResponse;
  } catch (e) {
    return undefined;
  }
}
