import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from 'theme/globalStyles';
import { useTheme } from 'theme/useTheme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'layouts';
import Macbook from './pages/home/Macbook';
import { LoadingSpinner } from './components/atoms/LoadingSpinner';

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
          <GlobalStyles/>
          <Router style={{ fontFamily: selectedTheme.fonts.primary }}>
            <Routes>
              <Route
                path="*"
                element={
                  <Layout setter={setSelectedTheme} theme={selectedTheme}/>
                }/>
              <Route
                path="/macbook"
                element={
                  <Suspense
                    fallback={
                      <h1
                        style={{
                          display: 'flex',
                          color: '#C56CEF',
                          alignSelf: 'center',
                        }}
                      >
                        <LoadingSpinner/>
                        {/* Loading... */}
                      </h1>
                    }
                  >
                    <Macbook/>
                  </Suspense>
                }/>
            </Routes>
          </Router>
        </ThemeProvider>
      }
    </>
  );
};

export default App;
