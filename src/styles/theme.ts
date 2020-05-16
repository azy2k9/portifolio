const global = {
  font: {
    fontFamily: {
      primary: '"Montserrat", sans-serif',
      secondary: '"Merriweather", serif',
    },
    fontSize: {
      base: 14,
      large: Math.ceil(14 * 1.25),
      small: Math.ceil(14 * 0.85)
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
      ultra: 900,
    }
  }
};

export const lightTheme = {
  colors: {
    primary: '#3DA9FC',
    accent: '#EF4565',
    secondary: '#90B4CE',
    background: '#FFFFFE',
    headline: '#2E5D7E',
    paragraph: '#5F6C7B',
    success: '#52C41A',
    warning: '#FFC53D',
    error: '#FF4D4F',
    black: '#000000',
    white: '#FFFFFF',
  },
  ...global
};

export const darkTheme = {
  colors: {
    ...lightTheme.colors,
    secondary: '#D6E5EF',
    background: '#465260',
    headline: '#CDD5EF',
    paragraph: '#AAB4BE',
  },
  ...global
};

