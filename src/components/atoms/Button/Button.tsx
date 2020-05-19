import React from 'react';
import StyledButton from './Button.styled';

const Button: React.FC<Button> = (props: Button) => {
  const { handleClick, children } = props;

  return (
    <StyledButton onClick={handleClick} type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
