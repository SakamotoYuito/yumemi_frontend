import { usePrefecturesCheckBox } from 'src/hooks/usePrefecturesCheckBox';
import styles from './styles.module.css';

export const PrefecturesCheckBoxComponent = () => {
  const { prefecturesCheckBoxData, register } = usePrefecturesCheckBox();
  return (
    <div className={styles.form}>
      <p>都道府県一覧</p>
      <form>
        {prefecturesCheckBoxData.map(({ prefCode, prefName }, index) => {
          return (
            <label key={index}>
              <input type='checkbox' {...register(`checkBox.${index}.checked`)} />
              {prefName}
            </label>
          );
        })}
      </form>
    </div>
  );
};
