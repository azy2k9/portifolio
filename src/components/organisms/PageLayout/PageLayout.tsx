import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Header from '../Header';
import { GlobalStyles } from '../../../styles/global';
import { lightTheme } from '../../../styles/theme';
import Navbar from '../Navbar';

const Container = styled.div<Props>`
  display: flex;
  overflow-y: auto;
  position: relative;
  transition: opacity 0.3s ease;
  z-index: 0;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

const MobileContainer = styled.div<Props>`
  flex-grow: 1;
  display: none;
  z-index: 100;
  position: absolute;
  top: 64px;
  bottom: 0;
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}

const PageLayout: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { children } = props;

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

export default PageLayout;
