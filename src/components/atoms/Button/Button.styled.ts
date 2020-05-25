/* eslint-disable @typescript-eslint/indent */
import styled, { DefaultTheme } from 'styled-components';
import { rgba, lighten } from 'polished';

interface Styles {
  variant?: string;
  theme: DefaultTheme;
  borderRadius?: string;
  children?: React.ReactNode;
}

const variantColor = ({ variant, theme }: Styles) => {
  let variantBackgroundColour = theme.colors.primary;
  const variantTextColor = theme.colors.white;
  switch (variant) {
    case 'primary':
      variantBackgroundColour = theme.colors.primary;
      break;
    case 'secondary':
      variantBackgroundColour = theme.colors.secondary;
      break;
    case 'success':
      variantBackgroundColour = theme.colors.success;
      break;
    case 'error':
      variantBackgroundColour = theme.colors.error;
      break;
    case 'warning':
      variantBackgroundColour = theme.colors.warning;
      break;
  }
  return [variantBackgroundColour, variantTextColor];
};

const StyledButton = styled.button<Button>`
  background-color: ${(props: Styles) => variantColor(props)[0]};
  border: 0;

  /* prettier-ignore */
  border-radius:
    ${({ borderRadius, children }: Styles) =>
      borderRadius === 'rounded' && children && '9999px'};
  box-shadow: 0 2px 8px -1px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  color: ${(props: Styles) => variantColor(props)[1]};
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.fontFamily.primary};
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  letter-spacing: 0.1rem;
  outline: none;
  padding: 8px 30px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;

  :hover {
    background: ${(props: Styles) => lighten(0.05, variantColor(props)[0])};
    border-width: 0;
    /* stylelint-disable */
    /* prettier-ignore */
    box-shadow:
      0 4px 20px -2px ${({ theme }) => rgba(theme.colors.primary, 0.5)};
    /* stylelint-enable */
    transform: scale(1.05);
  }
`;

export const Link = styled(StyledButton).attrs({ as: 'a' })`
  text-align: center;
  text-decoration: none;
`;

export default StyledButton;
