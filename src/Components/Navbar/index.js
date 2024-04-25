import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../media/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
      <nav>
      <span><Link to = "/" onClick={closeNavbar}>
      <img className='logo' src={logo} alt='logo' />
      </Link>
      </span>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to = "/about" onClick={closeNavbar}>About</Link></li>
          <li><Link to = "/contact" onClick={closeNavbar}>Contact</Link></li>
          <li><Link to = "/project" onClick={closeNavbar}>Projects</Link></li>
        </ul>
        <div className='hr-line'></div>
      </nav>
    
  );
}

export default Navbar;
