import React, { Children } from 'react';

import * as S from './styles';
import ItemTable from '../ItemTable/ItemTable';
import { User } from '@/types/users';

type TableProps = {
  data?: User[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.Container>
      <S.WrappedHeader>
        <S.Header>#</S.Header>

        <S.Header>Name</S.Header>

        <S.Header>Popularity</S.Header>

        <S.Header>Sales</S.Header>
      </S.WrappedHeader>
      {Children.toArray(data?.map((user) => <ItemTable user={user} />))}
    </S.Container>
  );
};

export default Table;
