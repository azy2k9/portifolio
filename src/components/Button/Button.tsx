import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button<Props>`
    border-radius: ${({ rounded }) => rounded && '16px'};
    background-color: ${({ primary, theme }) => primary && theme.colors.primary};
    color: ${({ primary, theme }) => primary && theme.colors.white};
    cursor: pointer;
    letter-spacing: 0.1rem;
    padding: 8px 30px;
    font-size: ${({ theme }) => `${theme.font.fontSize.small}px`};

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
