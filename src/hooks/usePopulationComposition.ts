import { useMemo } from 'react';
import { fetcher } from './fetcher';

export const usePopulationComposition = (prefCodeList: number[]) => {
  const populationDataFromApi = useMemo(() => {
    if (Array.isArray(prefCodeList) && prefCodeList.length > 0) {
      const populationData = prefCodeList.map(async (prefCode) => {
        const fetchData = await fetcher(
          `/api/v1/population/composition/perYear?prefCode=${prefCode}`,
        );
        const populationCompositionList = fetchData?.result?.data[0]?.data;
        return {
          code: prefCode,
          data: populationCompositionList,
        };
      });
      return populationData;
    }
    return [];
  }, [prefCodeList]);

  return Promise.all(populationDataFromApi);
};
