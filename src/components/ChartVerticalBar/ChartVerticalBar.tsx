import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as S from './styles';
import Reality from '@/assets/labelReality.svg';
import Target from '@/assets/labelTarget.svg';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
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
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Reality Sales',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: '#4AB58E',
      borderRadius: 5,
    },
    {
      label: 'Target Sales',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: '#FFCF00',
      borderRadius: 5,
    },
  ],
};

const ChartVerticalBar: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Target vs Reality</S.Title>
      <S.ChartContainer>
        <Bar options={options} data={data} width={'30%'} height={'8%'} />
      </S.ChartContainer>
      <S.LegendContainer>
        <S.Legend>
          <S.LabelIcon src={Reality} />
          <S.WrappedDescription>
            <S.DescriptionTitle>Reality Sales</S.DescriptionTitle>
            <S.DescriptionSubTitle>Global</S.DescriptionSubTitle>
          </S.WrappedDescription>
          <S.Value color="green">8.823</S.Value>
        </S.Legend>
        <S.Legend>
          <S.LabelIcon src={Target} />
          <S.WrappedDescription>
            <S.DescriptionTitle>Target Sales</S.DescriptionTitle>
            <S.DescriptionSubTitle>Commercial</S.DescriptionSubTitle>
          </S.WrappedDescription>
          <S.Value color="yellow">12.122</S.Value>
        </S.Legend>
      </S.LegendContainer>
    </S.Container>
  );
};

export default ChartVerticalBar;
