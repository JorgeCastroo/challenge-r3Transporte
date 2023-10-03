import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 140px;
  height: 144px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(Props) => Props.color};
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
