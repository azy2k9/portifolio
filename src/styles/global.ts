import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* stylelint-disable */
  *,
  *::after,
  *::before {
      box-sizing: border-box;
  }

  html,
  body,
  #root {
      display: flex;
      flex-direction: column;
      font-family: ${({ theme }) => theme.font.fontFamily.primary};
      height: 100vh;
      margin: 0;
      overflow: hidden;
      padding: 0;
  }
  /* stylelint-enable */
`;
