import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const GlobalThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;
