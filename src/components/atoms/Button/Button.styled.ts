import styled, { DefaultTheme } from 'styled-components';

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

const borderVariant = ({ borderRadius, children }: Styles) => {
  if (borderRadius === 'rounded')
    return children && children.toString().length * 3;

  return 0;
};

const StyledButton = styled.button<Button>`
  background-color: ${(props: Styles) => variantColor(props)[0]};
  color: ${(props: Styles) => variantColor(props)[1]};
  border-radius: ${(props: Styles) => `${borderVariant(props)}px`};
  cursor: pointer;
  letter-spacing: 0.1rem;
  padding: 8px 30px;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  font-family: ${({ theme }) => theme.font.fontFamily.primary};
  border: 0px;

  :hover {
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  }
`;

export const Link = styled(StyledButton).attrs({ as: 'a' })`
  text-decoration: none;
  text-align: center;
`;

export default StyledButton;
