import { NextRequest, NextResponse } from 'next/server';

import { fetchPrefectures } from '@/app/api/api/prefectures';
import { convertNextPopulationResponse } from '@/app/api/utils/convert';
import { PopulationNextResponse } from '@/types/population';
import { Prefecture } from '@/types/prefecture';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const type = req.url.split('/population/')[1].split('?')[0];
  const prefCodes = req.nextUrl.searchParams.get('prefCode')?.split(',');

  let populationNextResponse: PopulationNextResponse | undefined = {
    label: '',
    years: [],
    populationData: [],
  };

  if (prefCodes![0] === '') {
    return NextResponse.json(populationNextResponse, { status: 200 });
  }

  const prefectures = await fetchPrefectures();
  if (!prefectures) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }

  const prefCodesIncludePrefecture = prefCodes!
    .map((prefCode) => parseInt(prefCode, 10))
    .filter((prefCodeInt) => prefectures.result.some(
      (prefecture: Prefecture) => prefecture.prefCode === prefCodeInt,
    ));

  populationNextResponse = await convertNextPopulationResponse(
    type,
    prefCodesIncludePrefecture,
    prefectures,
  );

  if (!populationNextResponse) {
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }

  return NextResponse.json(populationNextResponse, { status: 200 });
}
