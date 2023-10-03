import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  overflow-x: auto;
  white-space: nowrap;
`;

export const WrappedHeader = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 160%;
  }
`;
export const Header = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #96a5b8;
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
