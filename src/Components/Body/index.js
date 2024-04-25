import React from 'react'
import './style.css'
import {  Typewriter } from 'react-simple-typewriter'

const Body = () => {
  return (
    <>
    <div className='home-section'>
    <div className='home-image'>
    <iframe title='hero-section-img' className='hero-section-image' src="https://lottie.host/embed/cff70859-a1f8-4a3b-b5d1-d335bc7561b3/1JpEZGgGyQ.json"></iframe>
    </div>
    <div className='home-content'>

    <div className='hero-image'>
    <div className='first-line'>
    </div>
    <div className='hero-content'></div>
      <h1 className='heading'>Hi Folks!!</h1>
    </div>
    <div className='second-line'>
      <h1 className='heading-two'>I'm Pranshu Agrawal</h1>
    </div>
    <div className='third-line'>
    <h1 className='heading-three'> I'm a &nbsp; 
    <Typewriter
            words={['frontend_developer' , 'web_developer' , 'frontend_engineer' , 'front_end_architect' ]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          </h1>
    </div>
    </div>
    </div>
    </>
  )
}

export default Body
