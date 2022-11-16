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
import { useGraphDataShaping } from 'src/hooks/useGraphDataShaping';
import { useSelectedPrefectures } from 'src/hooks/useSelectedPrefectures';
import { useColor } from 'src/hooks/useColor';

export const GraphComponent = () => {
  const { prefCodeList, prefNameList } = useSelectedPrefectures();
  const graphDataEachYear = useGraphDataShaping(prefCodeList, prefNameList);
  const colorList = useColor();

  return (
    <div className={styles.graphContainer}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          id='test'
          data={graphDataEachYear}
          margin={{ top: 15, right: 20, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            label={{ value: '年', offset: -7, position: 'insideBottomRight' }}
          />
          <YAxis
            tickFormatter={(t) => String(t / 1000)}
            label={{ value: '人口(万人)', offset: -10, angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Legend height={20} />
          {prefNameList.map((name: string, index: number) => {
            return (
              <Line
                key={index}
                type='monotone'
                dataKey={name}
                stroke={colorList[index]}
                activeDot={{ r: 5 }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
