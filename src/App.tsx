import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './layouts/Header';
import { GlobalStyles } from './styles/global';
import { lightTheme } from './styles/theme';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';


const Container = styled.div`
  overflow-y: auto;
  position: relative;
  /* z-index: -2; */
`;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: unset;
  }
`;

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header handleNavbar={handleNavbar} />
      <MobileContainer>
        <Navbar isOpen={isOpen} />
      </MobileContainer>
      <Container>
        <Hero />
      </Container>
    </ThemeProvider>
  );
};

export default App;
