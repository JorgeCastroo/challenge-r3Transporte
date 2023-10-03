import styled from 'styled-components';

interface Props {
  openMobile?: boolean;
}

export const Container = styled.div<Props>`
  z-index: 999;
  width: 100%;

  max-width: 261px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: absolute;
    height: 2458px;
    display: ${({ openMobile }) => (openMobile ? 'flex' : 'none')};
  }
`;

export const WrappedContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
`;

export const WrappedList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const WrappedSignOut = styled.div``;
