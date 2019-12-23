import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import './Projects.css'

const { Meta } = Card;

export default function Projects() {

  return (
    <div className='projects'>
      <div className="projects__project1">React-Resort-Demo <h2>React-Resort-github<Icon type="github"  /></h2></div>
      <div className="projects__project2">RPS Hero testing this too<Icon type="github"  /></div>
      <div className="projects__project3">Affirm Action<Icon type="github"  /></div>
    </div>
  )
}
