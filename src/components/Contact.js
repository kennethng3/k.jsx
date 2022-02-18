import React from 'react'
import { ContactForm1 } from './ContactForm1'
import { ContactForm2 } from './ContactForm2'
import { SubmitButton } from './SubmitButton'
export const Contact = () => {
  return (
    <form className="contact" id="contact">
        <h1>CONTACT</h1>
        <ContactForm1 />
        <ContactForm2 />
        <SubmitButton />
    </form>
  )
}
