import React from "react";
import "./MenuPage.css";
import { Link } from "react-router-dom";

export default function MenuPage({ setMenu }) {
  const routes = () => {
    const linkRoutes = ["/", "projects", "about", "contact"];
    // LINK NAMES CORRESPOND WITH LINK ROUTES
    const linkNames = ["Home", "Projects", "About", "Contact Me"];
    return linkRoutes.map((route, index) => {
      return (
        <Link to={route} className={`menu-items__${linkNames[index].toLowerCase().split(' ').join('-')}`} onClick={() => setMenu()}>
          {linkNames[index]}
        </Link>
      );
    });
  };
  return (
    <div className="menu-page">
      <div className="top-background">
        <div className="menu-items">
          {routes()}
        </div>
      </div>
      <div className="bottom-background">
        <div className="initials-menu"><h1>TG</h1></div>
      </div>
    </div>
  );
}
