import React, { useState, useEffect } from "react";
import { Button, Menu, Icon } from "antd";
import "./Navigation.css";
import HeaderTopics from './HeaderTopics'

export default function Navigation() {
  useEffect(() => {
    const redblock = () => {
      let headerName = document.querySelector(".header-name");
    };

    redblock();
  }, []);
  return (
    <div className="header-body">
      <div className="header-name">
        <div className="initials">TG</div>
      </div>
      <div className="burger-menu">
        <Icon type="menu" style={{fontSize:"1.4em"}}/>
      </div>
      
    </div>
  );
}
