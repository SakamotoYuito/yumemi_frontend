import { usePrefecturesCheckBox } from '@/hooks/usePrefecturesCheckBox';

type Props = {
  onChange(e: React.BaseSyntheticEvent): void;
};

export const PrefecturesCheckBoxComponent = ({ onChange }: Props) => {
  const prefecturesCheckBoxData = usePrefecturesCheckBox();
  return (
    <form>
      {prefecturesCheckBoxData.map((prefName, index) => {
        return (
          <label key={index}>
            <input
              id={String(index + 1)}
              type='checkbox'
              value={prefName}
              onChange={(e) => onChange(e)}
            />
            {prefName}
          </label>
        );
      })}
    </form>
  );
};
