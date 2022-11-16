import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { PrefecturesCheckBoxComponent } from 'src/components/CheckBox';
import { GraphComponent } from 'src/components/Graph';
import { useFormMethods } from 'src/hooks/useFormMethods';
import { FormProvider } from 'react-hook-form';
import { HeaderComponent } from 'src/components/Header';

const Home: NextPage = () => {
  const { methods } = useFormMethods();

  return (
    <>
      <HeaderComponent />
      <div className={styles.container}>
        <FormProvider {...methods}>
          <PrefecturesCheckBoxComponent />
          <GraphComponent />
        </FormProvider>
      </div>
    </>
  );
};

export default Home;
