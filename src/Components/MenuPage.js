import React from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";

export default function MenuPage({setMenu}) {
  return (
    <div className="menu-page">
      {console.log(setMenu)}
      <div className="top-background">
        <div className="menu-items">
          <Link to='/' onClick={()=> setMenu()}>Home</Link>
          <Link to='projects'>Projects </Link>
          <Link to='about'>About </Link>
          <Link to='contact'>Contact Me</Link>
          </div>
      </div>
      <div className="bottom-background">
        <div className="initials">
          TG
        </div>
      </div>
    </div>
  );
}
