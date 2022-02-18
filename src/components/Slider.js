import React from 'react'
import Slide from "./Slide"
import reactlogo from "../images/react-logo.svg"
import mysqllogo from "../images/mysql-logo.svg"
import figmalogo from "../images/figma-logo.svg"
import jslogo from "../images/js-logo.svg"
import gitlogo from "../images/git-logo.svg"
import Marquee from "react-fast-marquee"
export const Slider = () => {
  return (
    <Marquee speed="75">
        <Slide name="React" source={reactlogo}/>
        <Slide name="MySQL" source={mysqllogo}/>
        <Slide name="Figma" source={figmalogo}/>
        <Slide name="JS" source={jslogo}/>
        <Slide name="Git" source={gitlogo}/>
    </Marquee>
  )
}
