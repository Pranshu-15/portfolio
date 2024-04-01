import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='nav-left'>
        <h3>//pranshu_agrawal</h3>
        <h5 className='lower-line'>&ensp; web_dev</h5>
     </div>
     <div className='nav-right'>
        <ul>
            <li>_home</li>
            <li>_about</li>
            <li>_projects</li>
            <li>_resume</li>
            <li>_contact</li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar
