import { usePopulationComposition } from './usePopulationComposition';

type GraphDataObj = {
  [prop: string]: any;
};

export const useGraphDataShaping = (codes: number[], names: string[]) => {
  const dataFromApi = usePopulationComposition(codes, names);
  const yearList = new Array(18).fill(0).map((value, index) => {
    return 1960 + 5 * index;
  });

  const populationDataList = dataFromApi.map((dataInArea) => {
    const filteredPopulationList = dataInArea.value.filter(
      (populationEachYear) => populationEachYear.year >= 1960 && populationEachYear.year <= 2045,
    );
    return filteredPopulationList;
  });

  const graphDataEachYear = yearList.map((year, yearIndex) => {
    const graphDataEachYear: GraphDataObj = {
      year: year,
    };
    populationDataList.forEach((data, dataIndex) => {
      graphDataEachYear[dataFromApi[dataIndex].name] = data[yearIndex].value;
    });
    return graphDataEachYear;
  });

  return graphDataEachYear;
};
