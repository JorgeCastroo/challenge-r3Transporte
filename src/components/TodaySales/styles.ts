import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 604px;
  border-radius: 20px;
  border: 1px solid #f8f9fa;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 42px;
  @media (max-width: 768px) {
    gap: 24px;
    width: 80%;
  }
  @media (min-width: 1528px) {
    min-width: 604px;
  }
`;

export const WrappedTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const WrappedHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrappedCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }
`;
