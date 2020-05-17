import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import LogoIcon from '../../../assets/illustrations/Logo';
import HamburgerIcon from '../../atoms/HamburgerButton';

const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  align-items: center;
  padding-left: 33px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding-left: 0px;
    justify-content: center;
  }
`;

const NavbarContainer = styled.div`
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: unset;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

interface Props {
  handleNavbar: () => void;
  isOpen: boolean;
}

const Header: React.FC<Props> = ({ handleNavbar, isOpen }: Props) => {
  return (
    <>
      <Container>
        <LogoIcon />
        <HamburgerContainer onClick={(e) => handleNavbar()}>
          <HamburgerIcon isOpen={isOpen} />
        </HamburgerContainer>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </Container>
    </>
  );
};

export default Header;
