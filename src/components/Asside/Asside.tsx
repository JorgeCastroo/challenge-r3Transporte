import React from 'react';

import * as S from './styles';
import Logo from '@/assets/logo.svg';
import Button from '../Button/Button';
import ItemList from './components/ItemList/ItemList';

type AssideProps = {
  openMobile?: boolean;
};

const Asside: React.FC<AssideProps> = ({ openMobile }) => {
  return (
    <S.Container openMobile={openMobile}>
      <S.WrappedContent>
        <S.LogoContainer>
          <S.Logo src={Logo} />
          <S.Title>Site</S.Title>
        </S.LogoContainer>
        <Button label="Dashboard" hasIcon="Graph" />
        <S.WrappedList>
          <ItemList label="Leaderboard" icon="Chat" />
          <ItemList label="Order" icon="Shopping-cart" />
          <ItemList label="Products" icon="Shopping-outline" />
          <ItemList label="Sales Report" icon="Chart-Line" />
          <ItemList label="Messages" icon="Message" />
          <ItemList label="Settings" icon="Settings" />
        </S.WrappedList>
      </S.WrappedContent>
      <S.WrappedSignOut>
        <ItemList label="Sign Out" icon="Sign-Out" hasSignOut />
      </S.WrappedSignOut>
    </S.Container>
  );
};

export default Asside;
