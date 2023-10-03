import React, { useState } from 'react';

import * as S from '@/styles';
import Asside from '@/components/Asside/Asside';
import Header from '@/components/Header/Header';
import { useGetUsersQuery } from '@/services/users/users';
import TodaySales from '@/components/TodaySales/TodaySales';
import TopSellers from '@/components/TopSellers/TopSellers';
import ChartDoughnut from '@/components/ChartDoughnut/ChartDougnut';
import ChartVerticalBar from '@/components/ChartVerticalBar/ChartVerticalBar';
import ChartLines from '@/components/ChartLines/ChartLines';

const src: React.FC = () => {
  const { data } = useGetUsersQuery({ limit: 4 });
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <S.Container>
      <Asside openMobile={openMobile} />
      <S.Content>
        <Header setOpen={() => setOpenMobile((prev) => !prev)} />
        <S.SectionDash>
          <S.WrappedRow>
            <TodaySales />
            <ChartDoughnut />
          </S.WrappedRow>
          <S.WrappedRow>
            <ChartVerticalBar />
            <ChartLines />
          </S.WrappedRow>
          <TopSellers data={data} />
        </S.SectionDash>
      </S.Content>
    </S.Container>
  );
};

export default src;
