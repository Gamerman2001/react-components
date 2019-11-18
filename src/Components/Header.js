import React from 'react'
import {Button} from 'antd'
import './Header.css'

export default function Header() {
  return (
    <div className="header-body">
      <div className="header-name">
        Troy Gooden
      </div>

      <div className="header-topics">
        <Button type="primary" shape="round"  size={'small'}>
          Home
        </Button>
        <Button type="primary" shape="round"  size={'small'}>
          Portfolio
        </Button>
        <Button type="primary" shape="round"  size={'small'}>
          About Me
        </Button>
        <Button type="primary" shape="round"  size={'small'}>
          Contact Me
        </Button>
      </div>
    </div>
  )
}
