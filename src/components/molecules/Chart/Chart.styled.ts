import styled from 'styled-components';

export const StyledChart = styled.div`
.recharts-wrapper {
    height: 100vh !important;
    width: 100vw !important;
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