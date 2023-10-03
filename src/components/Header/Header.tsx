import React from 'react';

import * as S from './styles';
import Icon from '../Icon/Icon';
import useWindowSize from '@/utils/useWindoSize';

type HeaderProps = {
  setOpen?: () => void;
};

const Header: React.FC<HeaderProps> = ({ setOpen }) => {
  const isMobile = useWindowSize(738);

  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>
      <S.MenuUser>
        <S.BellNotification>
          <Icon icon="Bell-notification" size={24} color="Secondary" />
          <S.Notify />
        </S.BellNotification>
        <S.WrappedUser>
          <S.User>User</S.User>
          <S.UserType>Admin</S.UserType>
        </S.WrappedUser>
        <Icon icon="arrow" size={isMobile ? 12 : 25} color="TextPrimary" onClick={setOpen} />
      </S.MenuUser>
    </S.Container>
  );
};

export default Header;
