import React from 'react'
import { Icon } from "antd";
import './SocialMedia.css'
import {Link} from 'react-router-dom'

export default function SocialMedia() {
  return (
    <div className="social-media">
        <a href="https://github.com/Gamerman2001"><Icon type="github"  /></a>
        <a href=""><Icon type="linkedin" />  </a>
        <a href=""><Icon type="medium" /></a>
        <a href=""><Icon type="twitter" /></a> 
      </div>
  )
}
