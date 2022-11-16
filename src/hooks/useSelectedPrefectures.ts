import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckBoxData } from './usePrefecturesCheckBox';

export const useSelectedPrefectures = () => {
  const { watch } = useFormContext();
  const checkBoxForm = watch();

  const prefCodeList: number[] = useMemo(() => {
    if (checkBoxForm && checkBoxForm.checkBox.length > 0) {
      return checkBoxForm.checkBox
        .filter(({ checked }: CheckBoxData) => checked === true)
        .map(({ prefCode }: CheckBoxData) => prefCode);
    }
    return [];
  }, [checkBoxForm]);

  const prefNameList: string[] = useMemo(() => {
    if (checkBoxForm && checkBoxForm.checkBox.length > 0) {
      return checkBoxForm.checkBox
        .filter(({ checked }: CheckBoxData) => checked === true)
        .map(({ prefName }: CheckBoxData) => prefName);
    }
    return [];
  }, [checkBoxForm]);

  return {
    prefCodeList,
    prefNameList,
  };
};
