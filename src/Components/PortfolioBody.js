import React from "react";
import Projects from "./Projects";
import SocialMedia from "./SocialMedia";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { Button, Icon } from "antd";
import "./PortfolioBody.css";

export default function PortfolioBody() {
  return (
    <div className="port-body">
      <div className="word-wrap">
        <h1>Hi! My name is Troy.</h1>

        <h3> I'm a developer who is based out of NY & D.C.</h3>
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
      
      <div className="social-media">
        <SocialMedia />
      </div>
    </div>
  );
}
