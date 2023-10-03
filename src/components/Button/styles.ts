import styled from 'styled-components';

type Props = {
  type: 'Primary' | 'Secondary';
};

export const Container = styled.div<Props>`
  width: ${(Props) => (Props.type === 'Secondary' ? '100px' : '100%;')};
  height: ${(Props) => (Props.type === 'Secondary' ? '40px' : '64px')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${(Props) => (Props.type === 'Secondary' ? '8px' : '24px;')};
  background-color: ${(Props) => (Props.type === 'Secondary' ? Props.theme.colors.white : Props.theme.colors.primary)};
  border-radius: 16px;
  border: ${(Props) => (Props.type === 'Secondary' ? `1px solid #C3D3E2` : 'none')};
  cursor: pointer;
`;

export const Label = styled.span<Props>`
  color: ${(Props) => (Props.type === 'Secondary' ? Props.theme.colors.textPrimary : Props.theme.colors.white)};
  size: ${(Props) => (Props.type === 'Secondary' ? '14px' : '18px')};
  font-weight: ${(Props) => (Props.type === 'Secondary' ? '400' : '600')};
`;
