import React from 'react';
import styled from 'styled-components';
import { rgba, lighten } from 'polished';

const ButtonContainer = styled.button<Button>`
  background-color: ${({ primary, theme }) => primary && theme.colors.primary};
  color: ${({ primary, theme }) => primary && theme.colors.white};
  border: 0;
  box-shadow: 0 2px 8px -1px ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  border-radius: ${({ rounded, children }) =>
    rounded && children && '9999px'};
  cursor: pointer;
  letter-spacing: 0.1rem;
  padding: 8px 30px;
  outline: none;
  font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
  font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};
  transition: box-shadow 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  :hover {
    border: 0;
    background-color: ${({ primary, theme }) => primary && lighten(0.05, theme.colors.primary)};
    box-shadow: 0 4px 20px -2px ${({ theme }) => rgba(theme.colors.primary, 0.5)};
    transform: scale(1.05);
  }
`;

const Button: React.FC<Button> = (props: Button) => {
  const { handleClick, children } = props;

  return (
    <ButtonContainer onClick={handleClick} type="button" {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
