import React from 'react';
import './style.css'

const Button = ({ buttonText, link }) => {
    const handleClick = () => {
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.click();
      };

  return (
    <button className='btn' onClick={handleClick}>
    {buttonText}
  </button>
  );
}

export default Button;
