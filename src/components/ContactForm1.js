import React from 'react'
import memojicall from '../images/memojicall.png'
export const ContactForm1 = () => {
  return (
    <div className="contact1">
      <div>
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Email' />
        <input type="tel" placeholder='Phone Number' />
      </div>
      <img src={memojicall} alt="" />
    </div>
  )
}
