import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  width: 100vw;
  height: 100vh;
`;

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Container>{storyFn()}</Container>
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
