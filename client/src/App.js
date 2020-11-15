import React from 'react';
import './App.css';
import GlobalStyles from './style';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterSetUp from './router';

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <RouterSetUp />
      </div>
    </Router>
  );
}

export default App;
