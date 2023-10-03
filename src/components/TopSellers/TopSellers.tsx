import React from 'react';

import * as S from './styles';
import Table from './components/Table/Table';
import { User } from '@/types/users';

type TopSellersProps = {
  data?: User[];
};

const TopSellers: React.FC<TopSellersProps> = ({ data }) => {
  return (
    <S.Container>
      <S.Title>Top Sellers</S.Title>
      <Table data={data} />
    </S.Container>
  );
};

export default TopSellers;
