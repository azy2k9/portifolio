import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import LogoIcon from '../../assets/icons/Logo';
import HamburgerIcon from '../../assets/icons/Hamburger';

const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  align-items: center;
  padding-left: 33px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding-left: 0px;
    justify-content: center;
  }
`;

const NavbarContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: unset;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: unset;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <Container>
        <LogoIcon />
        <HamburgerContainer onClick={(e) => handleNavbar()}>
          <HamburgerIcon />
        </HamburgerContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </Container>
      <MobileContainer>
        <Navbar isOpen={isOpen} />
      </MobileContainer>
    </>
  );
};

export default Header;
