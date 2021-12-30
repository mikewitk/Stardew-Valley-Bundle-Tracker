import React from 'react';
import BundleTracker from './pages/BundleTracker';
import GlobalThemeProvider from './theme/ThemeProvider';

const App: React.FC = () => (
  <GlobalThemeProvider>
    <BundleTracker />
  </GlobalThemeProvider>
);
export default App;
