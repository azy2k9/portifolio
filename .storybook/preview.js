import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(GlobalWrapper);
