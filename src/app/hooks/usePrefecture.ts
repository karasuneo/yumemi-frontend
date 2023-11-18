import { useCallback, useState } from 'react';

import { fetchPrefectures } from '@/fetcher/prefectures';
import { PrefectureNextResponse } from '@/types/prefecture';

export const usePrefecture = () => {
  const [prefectures, setPrefecture] = useState<PrefectureNextResponse>();

  const getPrefecture = useCallback(async () => {
    const prefectureRes = await fetchPrefectures();
    if (!prefectureRes) {
      return;
    }
    setPrefecture(prefectureRes);
  }, []);

  return { getPrefecture, prefectures };
};
