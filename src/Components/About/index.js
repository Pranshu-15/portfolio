import React from 'react'
import './style.css'
import man from '../../media/freelancer.svg'

const About = () => {
  return (
    <div className='about'>
      <div className='left-section'>
        <h1 className='about-heading'>About me</h1>
        <p className='about-para'>Highly skilled Front-end Developer with knowledge of HTML, CSS, and JavaScript, proficient in 
frameworks such as React.js and Tailwind CSS; Targeting assignments to leverage technical skills and 
develop innovative, user-centric web applications and interfaces in a growth oriented organization, 
preferably in Delhi NCR</p>
      </div>
      <div className='right-section'>
      <img className='man' src={man} alt='man'/>
      </div>
    </div>
  )
}

export default About
