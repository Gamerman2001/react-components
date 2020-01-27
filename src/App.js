import React, { useEffect, useState } from "react";
import MenuPage from "./Components/MenuPage";
import Navigation from "./Components/Navigation";
import PortfolioBody from "./Components/PortfolioBody";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  const [menu, setMenu] = useState(false);
  const user = () => {
    return 5 + 6 
  } 
  return (
    <div className="App">
        <Router>
          <Navigation />
          <PortfolioBody />
        </Router>
    </div>
  );
}

export default App;
