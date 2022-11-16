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
        <LineChart
          id='test'
          data={graphDataEachYear}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            label={{ value: '年度', offset: -7, position: 'insideBottomRight' }}
          />
          <YAxis
            tickFormatter={(t) => String(t / 1000)}
            label={{ value: '人口(万人)', offset: -10, angle: -90, position: 'insideLeft' }}
          />
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
