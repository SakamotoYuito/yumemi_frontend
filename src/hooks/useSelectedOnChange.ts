import React, { useState } from 'react';

export const useSelectedOnChange = () => {
  const [checkedPrefList, setCheckedPrefList] = useState<string[]>([]);
  const handleChange = (e: React.BaseSyntheticEvent) => {
    const prefValue = `${e.target.id}_${e.target.value}`;
    if (e.target.checked) {
      const copyCheckedPrefList = checkedPrefList;
      copyCheckedPrefList.push(prefValue);
      setCheckedPrefList(copyCheckedPrefList);
    } else {
      const filteredPrefList = checkedPrefList.filter((element) => element !== prefValue);
      setCheckedPrefList(filteredPrefList);
    }
  };

  const prefCodeList = checkedPrefList.map((prefValue) => {
    return Number(prefValue.split('_')[0]);
  });

  const prefNameList = checkedPrefList.map((prefValue) => {
    return prefValue.split('_')[1];
  });

  return {
    handleChange,
    prefCodeList,
    prefNameList,
  };
};
