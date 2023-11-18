import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest } from 'next/server';

import { GET } from '../../app/api/population/[type]/route';
import {
  TEST_ELDERLY_POPULATION_RESPONSE,
  TEST_NONE_PREFECTURES_RESPONSE,
  TEST_TOTAL_POPULATION_RESPONSE,
  TEST_UNDER_POPULATION_RESPONSE,
  TEST_WORKING_POPULATION_RESPONSE,
} from '../const/population';

function testUrl(type: string, prefCode: string): string {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  return `${API_URL}/api/population/${type}?prefCode=${prefCode}`;
}

describe('api/population', () => {
  test('総人口情報が正しく返されるか確認', async () => {
    const mockRequest: Partial<NextRequest> = {
      url: testUrl('total', '12,13,11,22,33'),
      nextUrl: new NextURL(testUrl('total', '12,13,11,22,33')),
    };

    const response = await GET(mockRequest as NextRequest);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_TOTAL_POPULATION_RESPONSE);
  });

  test('年少人口情報が正しく返されるか確認', async () => {
    const mockRequest: Partial<NextRequest> = {
      url: testUrl('under', '12,13,11,22,33'),
      nextUrl: new NextURL(testUrl('under', '12,13,11,22,33')),
    };

    const response = await GET(mockRequest as NextRequest);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_UNDER_POPULATION_RESPONSE);
  });

  test('生産年齢人口情報が正しく返されるか確認', async () => {
    const mockRequest: Partial<NextRequest> = {
      url: testUrl('working', '12,13,11,22,33'),
      nextUrl: new NextURL(testUrl('working', '12,13,11,22,33')),
    };

    const response = await GET(mockRequest as NextRequest);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_WORKING_POPULATION_RESPONSE);
  });

  test('老年人口情報が正しく返されるか確認', async () => {
    const mockRequest: Partial<NextRequest> = {
      url: testUrl('elderly', '12,13,11,22,33'),
      nextUrl: new NextURL(testUrl('elderly', '12,13,11,22,33')),
    };

    const response = await GET(mockRequest as NextRequest);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_ELDERLY_POPULATION_RESPONSE);
  });

  test('パスパラメータが不正だった場合空の型出返るか確認', async () => {
    const mockRequest: Partial<NextRequest> = {
      url: 'http://localhost:3000/api/population/hello?prefCode=12,13,11,22,33',
      nextUrl: new NextURL(
        'http://localhost:3000/api/population/hello?prefCode=12,13,11,22,33',
      ),
    };

    const response = await GET(mockRequest as NextRequest);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_NONE_PREFECTURES_RESPONSE);
  });
});
