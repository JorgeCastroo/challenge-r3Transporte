import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  @media (max-width: 1528) {
    max-width: 1528px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionDash = styled.div`
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const WrappedRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 33px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
