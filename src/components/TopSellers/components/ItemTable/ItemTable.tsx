import React from 'react';

import * as S from './styles';
import { User } from '@/types/users';
import Popularity from '../Popularity/Popularity';
import { PROGRESS_COLOR } from '@/utils/progressColor';

type ItemTableProps = {
  user: User;
};

const ItemTable: React.FC<ItemTableProps> = ({ user }) => {
  const popularity = PROGRESS_COLOR[+user.id as 1 | 2 | 3 | 4];
  return (
    <S.Container>
      <S.Item>{user.id}</S.Item>
      <S.Item>{user.name}</S.Item>
      <Popularity primary={popularity.primary} secondary={popularity.secondary} progress={popularity.progress} />
      <S.Button colorPrimary={popularity.primary} colorTertiary={popularity.tertiary}>
        <S.ButtonText colorPrimary={popularity.primary}>{popularity.progress}</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default ItemTable;
