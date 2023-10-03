import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 14px;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BellNotification = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Notify = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #eb5757;
  position: absolute;
  top: 5px;
`;

export const MenuUser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
`;

export const WrappedUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const User = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

export const UserType = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;
