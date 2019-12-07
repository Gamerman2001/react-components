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
        <Link to={route} onClick={() => setMenu()}>
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
        <div className="initials">TG</div>
      </div>
    </div>
  );
}
