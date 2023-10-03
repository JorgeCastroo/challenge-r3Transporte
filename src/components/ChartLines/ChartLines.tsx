import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import LastMonth from '@/assets/labelLastMonth.svg';
import ThisMonth from '@/assets/labelThisMonth.svg';

import * as S from './styles';
import useWindowSize from '@/utils/useWindoSize';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  tension: 0.3,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last Month',
      data: [90, 110, 80, 100, 70, 90, 100],
      borderColor: '#00E096',
      backgroundColor: '#00E096',
      fill: {
        target: 'origin',
        above: '#00E09650',
      },
    },
    {
      label: 'This Month',
      data: [5, 50, 15, 20, 30, 7, 51],
      borderColor: '#0095FF',
      backgroundColor: '#009DFF51',
      fill: 'origin',
    },
  ],
};
const ChartLines: React.FC = () => {
  const isFull = useWindowSize(1528);

  return (
    <S.Container>
      <S.Title>Customer Satisfaction</S.Title>
      <S.ChartContainer>
        <Line options={options} data={data} height={isFull ? '100%' : 60} />
      </S.ChartContainer>
      <S.WrappedLegend>
        <S.LegendContainer>
          <S.IconLegend src={LastMonth} />

          <S.LegendBox>
            <S.Legend>Last Month</S.Legend>
            <S.LegendValue>$3,004</S.LegendValue>
          </S.LegendBox>
        </S.LegendContainer>
        <S.Line />
        <S.LegendContainer>
          <S.IconLegend src={ThisMonth} />
          <S.LegendBox>
            <S.Legend>This Month</S.Legend>
            <S.LegendValue>$4,504</S.LegendValue>
          </S.LegendBox>
        </S.LegendContainer>
      </S.WrappedLegend>
    </S.Container>
  );
};

export default ChartLines;
