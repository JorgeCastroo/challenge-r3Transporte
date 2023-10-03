import React from 'react';
import IcomoonReact from 'react-icomoon';
import iconSet from '@/assets/icons.json';
import theme from '@/styles/theme';

type IconProps = {
  icon: string;
  size: number;
  color?: 'Primary' | 'Secondary' | 'TextPrimary' | 'TextSecondary' | 'Danger';
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({ color, icon, size, onClick }) => {
  return (
    <IcomoonReact
      onClick={onClick}
      icon={icon}
      size={size}
      cursor="pointer"
      color={
        color
          ? color === 'Primary'
            ? theme.colors.primary
            : color === 'Secondary'
            ? theme.colors.secondary
            : color === 'TextPrimary'
            ? theme.colors.textPrimary
            : color === 'TextSecondary'
            ? theme.colors.textSecondary
            : theme.colors.danger
          : theme.colors.white
      }
      iconSet={iconSet}
    />
  );
};

export default Icon;
