import './App.css';
import React from 'react';
import routes from 'routes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar} from 'components/molecules/NavBar';

const App = () => (
  <div>
    <Router>
      <NavBar />
      <Routes>
        {
          routes.map(({
            component: Component,
            url,
          }) => {
            return (
              <Route
                key={url}
                path={url}
                element={<Component />}
              />
            );
          })
        }
      </Routes>
    </Router>
  </div>
);

export default App;
