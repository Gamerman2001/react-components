import React from 'react'
import Projects from './Projects'
import { Button, Icon } from 'antd'
import './PortfolioBody.css'

export default function PortfolioBody() {
  return (
    <div className="port-body">
      <div className="word-wrap">
        I am a DEVELOPER
      </div>
      <div className="projects">
        <Projects />
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
