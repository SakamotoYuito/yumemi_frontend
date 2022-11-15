import { usePopulationComposition } from './usePopulationComposition';

type GraphDataObj = {
  [prop: string]: any;
};

export const useGraphDataShaping = (codes: number[], names: string[]) => {
  const dataFromApi = usePopulationComposition(codes, names);
  const yearList = new Array(11).fill(0).map((value, index) => {
    return 1970 + 5 * index;
  });

  const populationDataList = dataFromApi.map((dataInArea) => {
    const filteredPopulationList = dataInArea.value.filter(
      (populationEachYear) => populationEachYear.year >= 1970 && populationEachYear.year <= 2020,
    );
    return filteredPopulationList;
  });

  const graphDataEachYear = yearList.map((year, yearIndex) => {
    const graphDataEachYear: GraphDataObj = {
      year: year,
    };
    populationDataList.map((data, dataIndex) => {
      graphDataEachYear[dataFromApi[dataIndex].name] = data[yearIndex].value;
    });
    return graphDataEachYear;
  });

  return graphDataEachYear;
};
