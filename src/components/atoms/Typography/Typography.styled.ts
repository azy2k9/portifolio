import styled, { DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
  weight?: string;
  size?: string;
  variant?: string;
}

const fontWeight = ({ theme, weight }: Props): number => {
  let selectedFontWeight = theme.font.fontWeight.regular;

  switch (weight) {
    case 'ultralight':
      selectedFontWeight = theme.font.fontWeight.ultralight;
      break;
    case 'light':
      selectedFontWeight = theme.font.fontWeight.light;
      break;
    case 'regular':
      selectedFontWeight = theme.font.fontWeight.regular;
      break;
    case 'bold':
      selectedFontWeight = theme.font.fontWeight.bold;
      break;
    case 'ultrabold':
      selectedFontWeight = theme.font.fontWeight.ultrabold;
      break;
    default:
      selectedFontWeight = theme.font.fontWeight.regular;
  }
  return selectedFontWeight;
};

const fontSize = ({ theme, size }: Props): number => {
  let selectedFontSize = theme.font.fontSize.base;

  switch (size) {
    case 'smallest':
      selectedFontSize = theme.font.fontSize.smallest;
      break;
    case 'small':
      selectedFontSize = theme.font.fontSize.small;
      break;
    case 'base':
      selectedFontSize = theme.font.fontSize.base;
      break;
    case 'large':
      selectedFontSize = theme.font.fontSize.large;
      break;
    case 'largest':
      selectedFontSize = theme.font.fontSize.largest;
      break;
    default:
      selectedFontSize = theme.font.fontSize.base;
  }
  return selectedFontSize;
};

const fontColor = ({ theme, variant }: Props): string => {
  let selectedFontColor = theme.colors.paragraph;

  switch (variant) {
    case 'primary':
      selectedFontColor = theme.colors.primary;
      break;
    case 'secondary':
      selectedFontColor = theme.colors.secondary;
      break;
    case 'paragraph':
      selectedFontColor = theme.colors.paragraph;
      break;
    case 'success':
      selectedFontColor = theme.colors.success;
      break;
    case 'warning':
      selectedFontColor = theme.colors.warning;
      break;
    case 'error':
      selectedFontColor = theme.colors.error;
      break;
    case 'headline':
      selectedFontColor = theme.colors.headline;
      break;
    case 'accent':
      selectedFontColor = theme.colors.accent;
      break;
    case 'black':
      selectedFontColor = theme.colors.black;
      break;
    case 'white':
      selectedFontColor = theme.colors.white;
      break;
    default:
      selectedFontColor = theme.colors.paragraph;
  }
  return selectedFontColor;
};

export const TypographyContainer = styled.span<Typography>`
  color: ${(props: Props) => fontColor(props)};
  font-size: ${(props: Props) => `${fontSize(props)}px`};
  font-weight: ${(props: Props) => fontWeight(props)};
  letter-spacing: 0.05rem;
`;
