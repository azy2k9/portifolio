import React from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'Buttons',
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
