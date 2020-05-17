import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button<Props>`
    background-color: ${({ primary, theme }) => primary && theme.colors.primary};
    color: ${({ primary, theme }) => primary && theme.colors.white};
    border-radius: ${({ rounded, children }) => rounded && children && `${children?.toString().length * 3}px`};
    cursor: pointer;
    letter-spacing: 0.1rem;
    padding: 8px 30px;
    font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};
    font-weight: ${({ theme }) => `${theme.font.fontWeight.ultralight}`};

    :hover {
      border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    }
`;

interface Props {
  handleClick: (e: React.MouseEvent) => void
  children: React.ReactNode
  primary?: boolean
  rounded?: boolean
}

const Button: React.FC<Props> = (props: Props) => {
  const { handleClick, children } = props;
    
  return (
    <ButtonContainer onClick={handleClick} {...props}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
