import { usePrefecturesCheckBox } from '@/hooks/usePrefecturesCheckBox';

export const PrefecturesCheckBoxComponent = () => {
  const prefecturesList = usePrefecturesCheckBox();
  return (
    <form>
      {prefecturesList.map((prefName, index) => {
        return (
          <label key={index}>
            <input type='checkbox' />
            {prefName}
          </label>
        );
      })}
    </form>
  );
};
