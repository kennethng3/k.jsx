import React from 'react'
import { Project } from './Project'
export const ProjectsGrid = () => {

  return (
    <div className='projectsgrid'>
      <div className="">
        <Project/>
        <Project/>
      </div>
      <div className="">
        <Project/>
        <Project/>
      </div>
    </div>
  )
}
