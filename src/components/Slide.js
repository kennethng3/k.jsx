import React from 'react'

export default function Slide ( props ) {
    return (
            <div className="slide">
                    <img src={props.source} alt="" />
                    <h1>{props.name}</h1>
                    <hr />
                </div>
    )
}