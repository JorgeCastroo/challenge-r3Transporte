import React from 'react';

import * as S from './styles';
import Icon from '../Icon/Icon';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  hasIcon?: string;
  type?: 'Primary' | 'Secondary';
};

const Button: React.FC<ButtonProps> = ({ label, hasIcon, type = 'Primary', onPress }) => {
  return (
    <S.Container type={type}>
      {hasIcon && (
        <Icon
          size={type === 'Secondary' ? 16 : 32}
          icon={hasIcon}
          color={type === 'Secondary' ? 'TextPrimary' : undefined}
        />
      )}
      <S.Label type={type}>{label}</S.Label>
    </S.Container>
  );
};

export default Button;
