import React from 'react'
import Projects from './Projects'
import { Button, Icon } from 'antd'
import './PortfolioBody.css'

export default function PortfolioBody() {
  return (
    <div className="port-body">
      <div className="word-wrap">
        <h1>Hi! My name is Troy.</h1>

        <h3> I'm a developer who is based out of NY & D.C.</h3>
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
