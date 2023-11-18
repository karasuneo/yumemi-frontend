import { NextResponse } from 'next/server';

import { PrefectureNextResponse } from '@/types/prefecture';

import { fetchPrefectures } from '../fetcher/prefectures';

export async function GET(): Promise<NextResponse> {
  const prefectures = await fetchPrefectures();
  if (!prefectures) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }

  const prefectureNextResponse: PrefectureNextResponse = {
    result: prefectures.result,
  };

  return NextResponse.json(prefectureNextResponse, { status: 200 });
}
