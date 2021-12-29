import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layouts';
import Theme from './Theme';

const App = () => (
  <Theme>
    <div>
      <Router>
        <Layout />
      </Router>
    </div>
  </Theme>
);

export default App;
