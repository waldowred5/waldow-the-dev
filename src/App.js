import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from 'theme/globalStyles';
import { useTheme } from 'theme/useTheme';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layouts';

const App = () => {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Router style={{ fontFamily: selectedTheme.fonts.primary }}>
            <Layout setter={setSelectedTheme} theme={selectedTheme} />
          </Router>
        </ThemeProvider>
      }
    </>
  );
};

export default App;
