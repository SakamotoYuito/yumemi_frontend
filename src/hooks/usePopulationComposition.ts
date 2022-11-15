import { useCallback, useEffect, useState } from 'react';
import { fetcher } from './fetcher';

type PopulationCompositionList = {
  code: number;
  name: string;
  value: PopulationCompositionValue[];
};

type PopulationCompositionValue = {
  year: number;
  value: number;
};

export const usePopulationComposition = (prefCodeList: number[], prefNameList: string[]) => {
  const [response, setResponse] = useState<PopulationCompositionList[]>([]);
  const populationDataFromApi = useCallback(async () => {
    if (prefCodeList.length !== response.length) {
      const populationData = await Promise.all(
        prefCodeList.map(async (prefCode, index) => {
          const fetchData = await fetcher(
            `/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          );
          const populationCompositionList: PopulationCompositionValue[] =
            fetchData?.result?.data[0]?.data;
          return {
            code: prefCode,
            name: prefNameList[index],
            value: populationCompositionList,
          };
        }),
      );
      setResponse(populationData);
    }
  }, [prefCodeList, prefNameList, response]);

  useEffect(() => {
    populationDataFromApi();
  }, [populationDataFromApi]);

  return response;
};
