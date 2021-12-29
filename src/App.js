import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layouts';

const App = () => (
  <div>
    <Router>
      <Layout />
    </Router>
  </div>
);

export default App;
