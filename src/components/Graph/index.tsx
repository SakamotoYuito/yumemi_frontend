import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import styles from './styles.module.css';
import { useGraphDataShaping } from '@/hooks/useGraphDataShaping';
import { useSelectedPrefectures } from '@/hooks/useSelectedPrefectures';

export const GraphComponent = () => {
  const { prefCodeList, prefNameList } = useSelectedPrefectures();
  const graphDataEachYear = useGraphDataShaping(prefCodeList, prefNameList);

  return (
    <div className={styles.graphContainer}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart id='test' width={300} height={300} data={graphDataEachYear}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Legend />
          {prefNameList.map((name: string, index: number) => {
            return (
              <Line
                key={index}
                type='monotone'
                dataKey={name}
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
