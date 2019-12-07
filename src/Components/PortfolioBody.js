import React, { useState } from "react";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Contact from "./Contact";
import MenuPage from "./MenuPage";
import { Route, Switch, Link } from "react-router-dom";
import { Button, Icon } from "antd";
import "./PortfolioBody.css";

export default function PortfolioBody() {
  const [showMenu, setShowMenu] = useState(false);
  const setShowMenuFunction = () => {
    console.log('executing function')
    setShowMenu(false);
  };
  return (
    <div className="port-body">
      <Link
        to={showMenu ? "/" : "/menu"}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="burger-menu">
          <Icon
            type={showMenu ? "close" : "menu"}
            style={{ fontSize: "1.4em" }}
          />
        </div>
      </Link>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route
          path="/menu"
          exact
          render={() => <MenuPage setMenu={setShowMenuFunction} />}
        />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={AboutMe} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Intro} />
      </Switch>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
}
