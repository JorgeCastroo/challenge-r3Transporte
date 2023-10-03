import styled from 'styled-components';

interface Props {
  colorPrimary?: string;
  colorTertiary?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #edf2f6;
  margin-top: 11px;
  padding-top: 18px;
  align-items: center;
  @media (max-width: 768px) {
    width: 160%;
  }
`;
export const Item = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #444a6d;
  &:nth-child(1) {
    width: 90px;
  }
  &:nth-child(2) {
    width: 45%;
  }
  &:nth-child(3) {
    width: 40%;
  }
`;

export const Button = styled.div<Props>`
  width: 86px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${(props) => props.colorPrimary};
  background-color: ${(props) => props.colorTertiary};
`;

export const ButtonText = styled.span<Props>`
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.colorPrimary};
`;
