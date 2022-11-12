import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { fetcher } from '@/hooks/fetcher';
import useSWR from 'swr';
import { usePrefecturesCheckBox } from '@/hooks/usePrefecturesCheckBox';
import { PrefecturesCheckBoxComponent } from '@/components/CheckBox';

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/v1/prefectures', fetcher);
  console.log(JSON.stringify(data));
  const tmp = usePrefecturesCheckBox();
  console.log(tmp);
  return (
    <>
      <div className={styles.container}>
        <PrefecturesCheckBoxComponent />
      </div>
    </>
  );
};

export default Home;
