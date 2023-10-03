import styled from 'styled-components';

interface Props {
  hasSignOut: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  cursor: pointer;

  :hover {
  }
`;

export const Label = styled.span<Props>`
  font-size: 18px;
  font-weight: 400;
  color: ${(Props) => (Props.hasSignOut ? Props.theme.colors.danger : Props.theme.colors.textSecondary)};
`;
