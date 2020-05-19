import React from 'react';
import StyledButton, { Link } from './Button.styled';

const Button: React.FC<Button> = (props: Button) => {
  const { handleClick, children, href } = props;

  if (href) {
    return <Link {...props}>{children}</Link>;
  }

  return (
    <StyledButton onClick={handleClick} type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
