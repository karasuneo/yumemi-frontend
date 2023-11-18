import { GET } from '../../app/api/prefectures/route';
import { TEST_PREFECTURES_RESPONSE } from '../const/prefectures';

describe('api/prefectures', () => {
  test('都道府県情報が正しく返されるか確認', async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(TEST_PREFECTURES_RESPONSE);
  });
});
