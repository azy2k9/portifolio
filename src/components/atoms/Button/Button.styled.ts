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

// const borderVariant = ({ borderRadius, children }: Styles) => {
//   if (borderRadius === 'rounded')
//     return children && children.toString().length * 3;

//   return 0;
// };

/* border-radius: ${(props: Styles) => `${borderVariant(props)}px`}; */

const StyledButton = styled.button<Button>`
  background-color: ${(props: Styles) => variantColor(props)[0]};
  color: ${(props: Styles) => variantColor(props)[1]};
  border: 0;
  box-shadow: 0 2px 8px -1px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  border-radius: ${({ borderRadius, children }: Styles) =>
    borderRadius === 'rounded' && children && '9999px'};
  cursor: pointer;
  letter-spacing: 0.1rem;
  padding: 8px 30px;
  outline: none;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  font-family: ${({ theme }) => theme.font.fontFamily.primary};
  transition: box-shadow 0.3s ease, background-color 0.3s ease,
    transform 0.3s ease;

  :hover {
    border: 0;
    background-color: ${(props: Styles) =>
      lighten(0.05, variantColor(props)[0])};
    box-shadow: 0 4px 20px -2px ${({ theme }) => rgba(theme.colors.primary, 0.5)};
    transform: scale(1.05);
  }
`;

export const Link = styled(StyledButton).attrs({ as: 'a' })`
  text-decoration: none;
  text-align: center;
`;

export default StyledButton;
