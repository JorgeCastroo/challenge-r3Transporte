import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import * as S from './styles';
import useWindowSize from '@/utils/useWindoSize';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut: React.FC = () => {
  const dataChart = {
    labels: ['62% New', '13% Returning', '23% Inactive'],
    datasets: [
      {
        label: 'User',
        data: [62, 13, 23],
        backgroundColor: ['#497AF9', '#789DFB', '#E5E5E5'],
      },
    ],
  };
  const isMobile = useWindowSize(1000);

  return (
    <S.Container>
      <S.WrappedTitle>
        <S.Title>Users</S.Title>
        <S.Subtitle>4,209</S.Subtitle>
      </S.WrappedTitle>
      <S.ChartContainer>
        <Doughnut
          data={dataChart}
          width={isMobile ? '30%' : '110%'}
          height={isMobile ? '30%' : '110%'}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#737791',
                  padding: 16,
                  boxHeight: 20,
                  boxWidth: 30,
                  borderRadius: 3,
                  useBorderRadius: true,
                  font: {
                    weight: 'small',
                    size: 16,
                  },
                },
                fullSize: true,
                align: 'center',
                position: isMobile ? 'left' : 'bottom',
                textDirection: 'center',
              },
            },
          }}
        />
      </S.ChartContainer>
    </S.Container>
  );
};

export default ChartDoughnut;
