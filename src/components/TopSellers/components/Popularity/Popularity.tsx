import React from 'react';

import * as S from './styles';

type IPopularity = {
  progress: string;
  primary: string;
  secondary: string;
};

const Popularity: React.FC<IPopularity> = ({ primary, progress, secondary }) => {
  return (
    <S.Container>
      <S.Background colorSecondary={secondary}>
        <S.Progress colorPrimary={primary} progress={progress} />
      </S.Background>
    </S.Container>
  );
};

export default Popularity;
