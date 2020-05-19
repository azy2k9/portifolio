import React from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'Hamburguer Button',
  parameters: {
    info: { inline: true },
  },
};

export const Hamburger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <HamburgerButton
      handleClick={() => {
        setIsOpen((prevState) => !prevState);
      }}
      isOpen={isOpen}
    />
  );
};
