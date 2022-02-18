import React from 'react'
import memojimac from "../images/memojimac.png"
export const AboutInfo = () => {
  return (
    <div className="aboutinfo">
                <span>
                My name is <span className="accent">Kenneth Ng</span> and I love <span className="accent">engineering</span> stuff for the web. I’m very passionate about giving users a unique and flawless <span className="accent">experience</span> using the right tools for the job.  
                </span>
                <img src={memojimac} alt="" />
            </div>
            
  )
}
