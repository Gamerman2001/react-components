import React from "react";
import { Card, Icon, Avatar } from "antd";
import "./Projects.css";

const { Meta } = Card;

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__project1">
        <a href="https://react-resort-hot.netlify.com">React Resort</a>
      </div>
      <div className="projects__project2">
      <a href="https://eddgr.github.io/rps-hero"> RPS Hero</a>
      </div>
      <div className="projects__project3">
      <a href="https://twitch-tv.netlify.com"> Twitch TV</a>
      </div>
    </div>
  );
}
