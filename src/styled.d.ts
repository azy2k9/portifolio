import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontSize: {
        largest: number;
        large: number;
        base: number;
        small: number;
        smallest: number;
      };
      fontWeight: {
        ultralight: number;
        light: number;
        regular: number;
        bold: number;
        ultrabold: number;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      headline: string;
      paragraph: string;
      success: string;
      warning: string;
      error: string;
      black: string;
      white: string;
    };
    mediaQueries: {
      smallMobile: string;
      bigMobile: string;
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
