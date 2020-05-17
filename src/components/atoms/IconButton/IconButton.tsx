import React from 'react';

const IconButton: React.FC<IconButton> = ({
  redirectTo,
  children,
  newTab,
}: IconButton) => {
  return (
    <a href={redirectTo} target={newTab ? '_blank' : ''}>
      {children}
    </a>
  );
};

export default IconButton;
