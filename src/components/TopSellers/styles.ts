import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #f8f9fa;
  border-radius: 20px;
  padding: 23px 45px;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: 351px;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
`;
