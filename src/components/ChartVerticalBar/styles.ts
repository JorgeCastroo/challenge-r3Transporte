import styled from 'styled-components';

interface Props {
  color: 'green' | 'yellow';
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 604px;
  max-height: 311px;
  border-radius: 20px;
  height: unset;
  border: 1px solid #f8f9fa;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px;
  @media (max-width: 768px) {
    height: 400px;
    width: 80%;
  }
  @media (min-width: 1528px) {
    min-width: 604px;
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

export const LegendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Legend = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LabelIcon = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 40px;
`;

export const WrappedDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;
export const DescriptionSubTitle = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const Value = styled.span<Props>`
  width: 45%;
  text-align: end;
  font-size: 14px;
  font-weight: 500;
  color: ${(Props) => (Props.color === 'green' ? '#27AE60' : '#FFA412')};
`;
