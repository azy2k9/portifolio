import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import { GlobalStyles } from '../../../styles/global';
import { Header, Navbar } from '../../organisms';

interface WrapperProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const MobileContainer = styled.div<WrapperProps>`
  bottom: 0;
  display: none;
  flex-grow: 1;
  position: absolute;
  top: 64px;
  z-index: 100;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Container = styled.div<WrapperProps>`
  display: flex;
  overflow-y: auto;
  position: relative;
  transition: opacity 0.3s ease;
  z-index: 0;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header handleNavbar={handleNavbar} isOpen={isOpen} />
      <MobileContainer isOpen={isOpen}>
        <Navbar isOpen={isOpen} />
      </MobileContainer>
      <Container isOpen={isOpen}>{children}</Container>
    </ThemeProvider>
  );
};

export default Wrapper;
