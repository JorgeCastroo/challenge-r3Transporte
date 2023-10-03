import React from 'react';

import * as S from './styles';

type CardProps = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
};

const Card: React.FC<CardProps> = ({ color, description, icon, subtitle, title }) => {
  return (
    <S.Container color={color}>
      <S.Icon src={icon} />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default Card;
