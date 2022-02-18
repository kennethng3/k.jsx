import React from 'react'
import { ProjectsGrid } from './ProjectsGrid'
import memojipeace from "../images/memojipeace.png"

export const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1>PROjECTS</h1>
        <ProjectsGrid />
        <img className='memojipeace' src={memojipeace} alt="" />
    </div>
  )
}
