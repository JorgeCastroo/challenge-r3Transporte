import styled from 'styled-components';

interface Props {
  colorPrimary?: string;
  colorSecondary?: string;
  progress?: string;
}

export const Container = styled.div`
  width: 40%;
`;

export const Background = styled.div<Props>`
  width: 80%;
  height: 4px;
  background-color: ${(props) => props.colorSecondary};
  position: relative;
`;

export const Progress = styled.div<Props>`
  width: ${(props) => props.progress};
  height: 4px;
  background-color: ${(props) => props.colorPrimary};
  position: absolute;
`;
