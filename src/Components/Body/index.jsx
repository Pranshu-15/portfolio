import React from 'react'
import './style.css'
import {  Typewriter } from 'react-simple-typewriter'
import { Button } from '@mui/material'

const Body = () => {
    
  return (
    <div className='main-hero-section'>
      <h5 className='upper-line'>// hi, I'm Pranshu, a...</h5>
      <h1>
      &#60;&nbsp;
      <span className='text-animate'>
      <Typewriter
            words={['frontend_developer' , 'web_developer' , 'frontend_engineer', 'client_side_developer' , 'front_end_architect' , 'web_application_developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
      </span>
      &#62;</h1>
      <div className="parallax"></div>

<div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
<div className='about-me-section'>
    <center><h1>&#60;&nbsp; about_me &nbsp;&#62;</h1></center>
    <p>Highly skilled Front-end Developer with knowledge of HTML, CSS, and JavaScript,
proficient React.js</p>
<hr style={{ borderTop: '1px solid #000000', width: '100%' }} />
</div>
<div className='about-me-description'>
<p>...I am a fresher in web development, with a good background in front-end technologies like react.js;</p>
<Button variant="contained" size="large" className='my-btn'>
          read_more
        </Button>
</div>


<div className='projects-section'>
<center><h1>&#60;&nbsp; projects &nbsp;&#62;</h1></center>

</div>
</div>
  )
}

export default Body
