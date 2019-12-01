import React from 'react'
import { Icon } from "antd";
import './SocialMedia.css'
import {Link} from 'react-router-dom'

export default function SocialMedia() {
  return (
    <div className="social-media">
        <a href="https://github.com/Gamerman2001"><Icon type="github"  /></a>
        <a href="https://www.linkedin.com/in/troygooden/"><Icon type="linkedin" />  </a>
        <a href="https://medium.com/@tro12185"><Icon type="medium" /></a>
      </div>
  )
}
