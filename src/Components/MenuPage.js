import React from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <div className="top-background">
        <div className="menu-items">
          <Link to='/'>Home</Link>
          <Link to='projects'>Projects </Link>
          <Link to='about'>About </Link>
          <Link to='contact'>Contact Me</Link>
          </div>
      </div>
      <div className="bottom-background"></div>
    </div>
  );
}
