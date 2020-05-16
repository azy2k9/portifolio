import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './layouts/Header';
import { GlobalStyles } from './styles/global';
import { lightTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
