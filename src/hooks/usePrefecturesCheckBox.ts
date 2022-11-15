import { useMemo, useEffect } from 'react';
import { fetcher } from './fetcher';
import useSWR from 'swr';
import { useFormContext } from 'react-hook-form';

type PrefecturesCheckBoxDataObj = {
  checkBox: CheckBoxData[];
};

export type CheckBoxData = {
  prefCode: number;
  prefName: string;
  checked: boolean;
};

type PrefecturesCheckBoxDataValue = {
  prefCode: number;
  prefName: string;
};

export const usePrefecturesCheckBox = () => {
  const { register, setValue } = useFormContext();
  const { data, error } = useSWR('/api/v1/prefectures', fetcher);
  if (error) {
    throw new Error('API Error /api/v1/prefectures');
  }

  const prefecturesCheckBoxData: PrefecturesCheckBoxDataObj = useMemo(() => {
    if (typeof data === 'object' && 'result' in data) {
      return {
        checkBox: data.result.map((value: PrefecturesCheckBoxDataValue) => {
          return { ...value, checked: false };
        }),
      };
    }
    return { checkBox: [] };
  }, [data]);

  useEffect(() => {
    prefecturesCheckBoxData.checkBox.forEach((value: CheckBoxData, index: number) => {
      setValue(`checkBox.${index}`, value);
    });
  }, [prefecturesCheckBoxData, setValue]);

  return {
    prefecturesCheckBoxData,
    register,
  };
};
