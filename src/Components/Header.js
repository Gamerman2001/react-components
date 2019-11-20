import React, { useState, useEffect } from "react";
import { Button, Menu, Icon } from "antd";
import "./Header.css";
import HeaderTopics from './HeaderTopics'

export default function Header() {
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
        <Icon type="menu" style={{fontSize:"2em"}}/>
      </div>
      
    </div>
  );
}
