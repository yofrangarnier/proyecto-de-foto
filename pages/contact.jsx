import React from 'react'
import Hero from "../components/Hero"
import Contact from '../components/Contact'
const contact = () => {
  return (
    <div>
        <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more content."
      />
      <Contact />
    </div>
    </div>
  )
}

export default contact