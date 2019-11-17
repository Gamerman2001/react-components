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

      </div>
      <div className="social-media">
        <Button type='primary'>hi</Button>
        <Icon type="github" theme='filled'height='6em' width='4em'/>
        <Icon type="linkedin" />
        <Icon type="medium" />
        <Icon type="twitter" />

      </div>
    </div>
  )
}
