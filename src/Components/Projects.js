import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import './Projects.css'

const { Meta } = Card;

export default function Projects() {

  return (
    <div className='projects'>
      <div className="projects__project1">React Resort</div>
      <div className="projects__project2">RPS Hero</div>
      <div className="projects__project3">Affirm Action</div>
    </div>
  )
}
