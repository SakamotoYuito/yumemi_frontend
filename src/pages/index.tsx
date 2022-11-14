import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { usePrefecturesCheckBox } from '@/hooks/usePrefecturesCheckBox';
import { PrefecturesCheckBoxComponent } from '@/components/CheckBox';
import { usePopulationComposition } from '@/hooks/usePopulationComposition';
import { GraphComponent } from '@/components/Graph';
import { useSelectedOnChange } from '@/hooks/useSelectedOnChange';

const Home: NextPage = () => {
  const { handleChange, prefCodeList, prefNameList } = useSelectedOnChange();
  console.log(prefCodeList);
  return (
    <>
      <div className={styles.container}>
        <PrefecturesCheckBoxComponent onChange={handleChange} />
        <GraphComponent checkedList={prefNameList} />
        {prefCodeList}
      </div>
    </>
  );
};

export default Home;
