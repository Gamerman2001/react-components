import React from "react";
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
  return (
    <div className="port-body">
      <Link to="/menu">
        <div className="burger-menu ">
          <Icon type="menu" style={{ fontSize: "1.4em" }} />
        </div>
      </Link>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={AboutMe} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <div className="social-media">
        <SocialMedia />
      </div>
    </div>
  );
}
