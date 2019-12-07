import React from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <div className="top-background">
        <div className="menu-items">
          <Link to='/'>Home</Link>
          <Link>Projects </Link>
          <Link>About </Link>
          <Link>Contact Me</Link>
          </div>
      </div>
      <div className="bottom-background"></div>
    </div>
  );
}
