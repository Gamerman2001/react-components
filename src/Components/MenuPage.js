import React from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";

export default function MenuPage({ setMenu }) {
  return (
    <div className="menu-page">
      {console.log(setMenu)}
      <div className="top-background">
        <div className="menu-items">
          <Link to="/" onClick={() => setMenu()}>
            Home
          </Link>
          <Link to="projects" onClick={() => setMenu()}>
            Projects{" "}
          </Link>
          <Link to="about" onClick={() => setMenu()}>
            About{" "}
          </Link>
          <Link to="contact" onClick={() => setMenu()}>
            Contact Me
          </Link>
        </div>
      </div>
      <div className="bottom-background">
        <div className="initials">TG</div>
      </div>
    </div>
  );
}
