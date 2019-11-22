import React, { useState, useEffect } from "react";
import { Button, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./Navigation.css";
import HeaderTopics from "./HeaderTopics";

export default function Navigation() {
  useEffect(() => {
    const redblock = () => {
      let headerName = document.querySelector(".header-name");
    };

    redblock();
  }, []);
  return (
    <div className="header-body">
      <Link to="/">
        <div className="header-name">
          <div className="initials">TG</div>
        </div>
      </Link>
    </div>
  );
}
