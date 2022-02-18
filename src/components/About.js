import React from "react";
import Technologies from "./Technologies"
import { AboutInfo } from "./AboutInfo";
export default function About ( ) {
    return ( 
        <div className="about" id="about">
            <h1>ABOUT</h1>
            <AboutInfo />
            <Technologies />
        </div>
    )
}