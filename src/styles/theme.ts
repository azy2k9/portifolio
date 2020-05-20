const global = {
  font: {
    fontFamily: {
      primary: '"Montserrat", sans-serif',
      secondary: '"Merriweather", serif',
    },
    fontSize: {
      largest: Math.ceil(18 * 2.5),
      large: Math.ceil(18 * 1.5),
      base: 18,
      small: Math.ceil(18 * 0.85),
      smallest: Math.ceil(18 * 0.5),
    },
    fontWeight: {
      ultralight: 100,
      light: 300,
      regular: 400,
      bold: 700,
      ultrabold: 900,
    },
  },
  mediaQueries: {
    smallMobile: '(max-width: 480px)',
    bigMobile: '(max-width: 768px)',
    mobile: '(max-width: 480px), (max-width: 768px)',
    tablet: '(max-width: 992px)',
    laptop: '(max-width: 1200px)',
  },
};

export const lightTheme = {
  colors: {
    primary: '#3DA9FC',
    accent: '#EF4565',
    secondary: '#D6E5EF',
    background: '#FFFFFE',
    headline: '#2E5D7E',
    paragraph: '#5F6C7B',
    success: '#52C41A',
    warning: '#FFC53D',
    error: '#FF4D4F',
    black: '#000000',
    white: '#FFFFFF',
    twitter: '#55ACEE',
    linkedIn: '#0077B5',
  },
  ...global,
};

export const darkTheme = {
  colors: {
    ...lightTheme.colors,
    secondary: '#90B4CE',
    background: '#465260',
    headline: '#CDD5EF',
    paragraph: '#AAB4BE',
  },
  ...global,
};
