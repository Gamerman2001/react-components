import React, {useState, useEffect} from 'react'
import {Button, Menu} from 'antd'
import './Header.css'


export default function Header() {
  

  useEffect(() => {
    const redblock = () => {
    let headerName = document.querySelector('.header-name')
    
  }

    redblock()
      }
  , [])
  return (
  
    <div className="header-body">
      <div className="header-name">
        <div className="initials">TG</div>
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
        <Menu className='changeAnt' style={{borderRight: 'none' ,width: '70px', background: 'none'  }}>
          <Menu.Item key="alipay" >
          <a style={{color: '#1BA0CB'}}href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
        </Menu>
        
      </div>
    </div>
    )
}
