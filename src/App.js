import './App.css';
import React from 'react';
import routes from 'routes';
// import Home from 'views/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />*/}
        {/* <Route>*/}
        {
          routes.map(({
            title,
            component: Component,
            url,
          }) => {
            return (
              <Route
                key={url}
                path={url}
                element={<Component />}
                // element={(props) =>
                //   <Component {...props} title={title} />}
              />
            );
          })
        }
        {/* </Route>*/}
      </Routes>
    </Router>
  </div>
);

export default App;
