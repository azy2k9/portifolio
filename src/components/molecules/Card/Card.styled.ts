import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  left: 10.94%;
  top: 6.93%;
`;

export const AlignentContainer = styled.div`
  width: 300px;
`;

export const IllustrationContainer = styled.div`
  position: absolute;
  left: 10.94%;
  right: 10.94%;
  top: 25.08%;
  bottom: 36.63%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  left: 10.94%;
  right: 10.94%;
  top: 67.66%;
  bottom: 21.78%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;

  position: absolute;
  left: 31.2%;
  right: 36.67%;
  top: 83.66%;
  bottom: 9.74%;
`;
