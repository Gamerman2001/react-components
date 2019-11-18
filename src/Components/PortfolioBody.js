import React from 'react'
import { Button, Icon } from 'antd'
import './PortfolioBody.css'

export default function PortfolioBody() {
  return (
    <div className="port-body">
      <div className="word-wrap">
        I am a DEVELOPER
      </div>
      <div className="projects">
        project 1
        
        project 2

        project 3

      </div>
      <div className="social-media">
        <Icon type="github" theme='filled'height='6em' width='4em'/>
        <Icon type="linkedin" />
        <Icon type="medium" />
        <Icon type="twitter" />

      </div>
    </div>
  )
}
