import React from 'react'
import { Icon } from "antd";
import './SocialMedia.css'
import {Link} from 'react-router-dom'

export default function SocialMedia() {
  return (
    <div className="social-media">
        <Link><Icon type="github" theme="filled" height="6em" width="4em" /></Link>    
        <Link><Icon type="linkedin" /></Link>    
        <Link><Icon type="medium" /></Link>    
        <Link><Icon type="twitter" /></Link>    
      </div>
  )
}
