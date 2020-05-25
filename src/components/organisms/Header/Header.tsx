import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import LogoIcon from '../../../assets/illustrations/Logo';
import HamburgerButton from '../../atoms/HamburgerButton';

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding-left: 33px;
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    justify-content: center;
    padding-left: 0;
  }
`;

const NavbarContainer = styled.div`
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: none;
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
        <HamburgerButton isOpen={isOpen} handleClick={handleNavbar} />
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
      </Container>
    </>
  );
};

export default Header;
