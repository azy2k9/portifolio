import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './layouts/Header';
import { GlobalStyles } from './styles/global';
import { lightTheme } from './styles/theme';
import Hero from './layouts/Hero';


const Container = styled.div`
  overflow-y: auto;
  position: relative;
  z-index: -2;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Hero />
      </Container>
    </ThemeProvider>
  );
};

export default App;
