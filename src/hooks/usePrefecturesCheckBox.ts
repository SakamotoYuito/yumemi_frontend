import { useMemo } from 'react';
import { fetcher } from './fetcher';
import useSWR from 'swr';

type PrefecturesResponses = {
  prefCode: number;
  prefName: string;
};

export const usePrefecturesCheckBox = () => {
  const { data, error } = useSWR('/api/v1/prefectures', fetcher);
  if (error) {
    throw new Error('API Error /api/v1/prefectures');
  }

  const prefecturesCheckBoxData: string[] = useMemo(() => {
    if (typeof data === 'object' && 'result' in data) {
      const prefecturesNameList = data.result.map((response: PrefecturesResponses) => {
        const prefectureName = response.prefName;
        return prefectureName;
      });
      return prefecturesNameList;
    }
    return [];
  }, [data]);

  return prefecturesCheckBoxData;
};
