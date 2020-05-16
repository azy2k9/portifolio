import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      fontFamily: {
        primary: string,
        secondary: string,
      },
      fontSize: {
        base: number,
        large: number,
        small: number
      },
      fontWeight: {
        light: number,
        regular: number,
        bold: number,
        ultra: number,
      }
    }
    colors: {
      primary: string
      secondary: string
      accent: string
      background: string
      headline: string
      paragraph: string
      success: string
      warning: string
      error: string
      black: string
      white: string
    }
  }
}