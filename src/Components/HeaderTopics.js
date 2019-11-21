import React from "react";
import { Button, Menu, Icon } from "antd";

export default function HeaderTopics() {
  return (
    <div className="header-topics">
      {/* --------code for menu still needs styling--------       */}

      <Menu
        mode="horizontal"
        className="changeAnt"
        style={{
          border: "2px red solid",
          display: "inline-block",
          borderRight: "none",
          width: "auto",
          background: "none"
        }}
      >
        <Menu.Item className="change-ant" key="alipay">
          <a
            style={{ color: "#1BA0CB" }}
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </Menu.Item>
        <Menu.Item className="change-ant" key="alipay">
          <a
            style={{ color: "#1BA0CB" }}
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </Menu.Item>
        <Menu.Item className="change-ant" key="alipay">
          <a
            style={{ color: "#1BA0CB" }}
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </Menu.Item>
        <Menu.Item className="change-ant" key="alipay">
          <a
            style={{ color: "#1BA0CB" }}
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </Menu.Item>
      </Menu>

      {/* --------code for menu still needs styling--------       */}
    </div>
  );
}
