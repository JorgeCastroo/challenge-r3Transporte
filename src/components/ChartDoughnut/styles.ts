import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: unset;
  flex-direction: column;

  border-radius: 20px;
  border: 1px solid #f8f9fa;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  @media (max-width: 768px) {
    height: 400px;
    width: 80%;
  }
  @media (max-width: 1528px) {
    max-width: 360px;
  }
`;

export const ChartContainer = styled.div`
  flex: 1;
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
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
`;
