import React from 'react';

import * as S from './styles';
import Card from './components/Card/Card';
import IconSales from '@/assets/iconSales.svg';
import IconProduct from '@/assets/iconProduct.svg';
import IconOrder from '@/assets/iconOrder.svg';
import Button from '../Button/Button';

const TodaySales: React.FC = () => {
  return (
    <S.Container>
      <S.WrappedHeader>
        <S.WrappedTitle>
          <S.Title>Today’s Sales</S.Title>
          <S.Subtitle>Sales Summery</S.Subtitle>
        </S.WrappedTitle>
        <Button label="Export" hasIcon="Export" type="Secondary" />
      </S.WrappedHeader>
      <S.WrappedCards>
        <Card icon={IconSales} color="#FFE2E5" title="$1k" description="+8% from yesterday" subtitle="Total Sales" />
        <Card icon={IconOrder} color="#FFF4DE" title="300" description="+5% from yesterday" subtitle="Total Order" />
        <Card
          icon={IconProduct}
          color="rgba(220, 252, 231, 1)"
          title="5"
          description="+1,2% from yesterday"
          subtitle="Product Sold"
        />
      </S.WrappedCards>
    </S.Container>
  );
};

export default TodaySales;
