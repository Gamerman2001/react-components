import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header'
import PortfolioBody from './Components/PortfolioBody'
import './App.css';


function App() {
  return (
    <div className="App">
     <Header />
     {console.log(document.querySelector('#root'))}
     <PortfolioBody />
    </div>
  );
}

export default App;
