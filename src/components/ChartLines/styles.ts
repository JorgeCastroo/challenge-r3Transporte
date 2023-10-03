import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: unset;
  border: 1px solid #f8f9fa;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 1528px) {
    max-width: 360px;
    height: 234px !important;
  }
`;

export const ChartContainer = styled.div`
  flex: 1;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const WrappedLegend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  flex-shrink: 0;
  background-color: #bdc9d3;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`;

export const LegendBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const IconLegend = styled.img`
  width: 19px;
  margin-top: 8px;
`;

export const LegendValue = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 500;
`;
