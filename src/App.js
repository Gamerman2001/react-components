import React from 'react';
import logo from './logo.svg';
import Navigation from './Components/Navigation'
import PortfolioBody from './Components/PortfolioBody'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Router>
       <PortfolioBody />
     </Router>
     
    </div>
  );
}

export default App;
