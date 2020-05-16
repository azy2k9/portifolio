import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.colors.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.fontFamily.primary};
    transition: all 0.25s linear;
    overflow: hidden;
}
`;
