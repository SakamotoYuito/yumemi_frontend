import { usePrefecturesCheckBox } from '@/hooks/usePrefecturesCheckBox';

export const PrefecturesCheckBoxComponent = () => {
  const { prefecturesCheckBoxData, register } = usePrefecturesCheckBox();
  return (
    <form>
      {prefecturesCheckBoxData.checkBox.map(({ prefCode, prefName }, index) => {
        return (
          <label key={index}>
            <input type='checkbox' {...register(`checkBox.${index}.checked`)} />
            {prefName}
          </label>
        );
      })}
    </form>
  );
};
