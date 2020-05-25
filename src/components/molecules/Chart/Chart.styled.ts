import styled from 'styled-components';

export const StyledChart = styled.div`
  .recharts-wrapper {
    height: 100vh;
    width: 100vw;

    .recharts-surface {
      height: 100%;
      width: 100%;

      text {
        fill: ${({ theme }) => theme.colors.white};
        font-weight: ${({ theme }) => theme.font.fontWeight.ultralight};
      }
    }
  }
`;
