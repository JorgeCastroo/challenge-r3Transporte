import React from 'react';

import * as S from './styles';
import Icon from '@/components/Icon/Icon';

type ItemListProps = {
  label: string;
  icon: string;
  hasSignOut?: boolean;
};
const ItemList: React.FC<ItemListProps> = ({ label, icon, hasSignOut }) => {
  return (
    <S.Container>
      <Icon size={24} color={hasSignOut ? 'Danger' : 'TextSecondary'} icon={icon} />
      <S.Label hasSignOut={hasSignOut ? hasSignOut : false}>{label}</S.Label>
    </S.Container>
  );
};

export default ItemList;
