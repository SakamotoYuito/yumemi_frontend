import { useState, useEffect } from 'react';
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

type Data = {
  name: string;
  uv: number;
  pv: number;
};

type Props = {
  codes: number[];
  names: string[];
};

export const GraphComponent = ({ codes, names }: Props) => {
  const [graphData, setGraphData] = useState([{}]);
  const graphDataEachYear = useGraphDataShaping(codes, names);

  useEffect(() => {
    graphDataEachYear.then((data) => {
      setGraphData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.graphContainer}>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart id='test' width={300} height={300} data={graphData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Legend />
          {names.map((name) => {
            <Line type='monotone' dataKey={name} stroke='#8884d8' activeDot={{ r: 8 }} />;
          })}
          <Line type='monotone' dataKey='青森県' stroke='#8884d8' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
