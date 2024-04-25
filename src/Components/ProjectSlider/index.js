import React, {  useRef } from 'react';
import './style.css'
import one from '../../media/project-one.jpg'
import two from '../../media/project-two.jpg'
import three from '../../media/project-three.png'
import four from '../../media/project-four.jpg'
import five from '../../media/project-five.jpg'
import six from '../../media/project-six.jpg'
import seven from '../../media/project-seven.jpg'
import eight from '../../media/project-eight.jpg'
import nine from '../../media/project-nine.jpg'
import ten from '../../media/project-ten.jpg'
import eleven from '../../media/project-eleven.jpg'
import Button from '../Button';




const ProjectSlider = () => {
    const sliderRef = useRef(null);

  const nextSlide = () => {
    const slides = sliderRef.current.querySelectorAll('.slides');
    sliderRef.current.appendChild(slides[0]);
  };

  const prevSlide = () => {
    const slides = sliderRef.current.querySelectorAll('.slides');
    sliderRef.current.prepend(slides[slides.length - 1]);
  };
    return (
        <div className='project-html'>
            <div className='project-body'>
            <div className="container">
      <div className="slider" ref={sliderRef}>
          <div className="slides" style={{ '--img': `url(${one})`}}>
            <div className="content">
              <h2>React Calculator</h2>
              <p>A simple React.js calculator performing basic operations like addition, subtraction, multiplication, and division with user-friendly interface.</p>
              <Button buttonText="Demo" link="https://startling-bombolone-e6ea1d.netlify.app/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/FrontEnd-4-Week-1-Test" />

            </div>
          </div>
  
          <div className="slides box" style={{ '--img': `url(${two})` }}>
            <div className="content">
              <h2>Podcast Platform</h2>
              <p>Application utilizes React.js for the frontend, seamlessly integrated with Google 
Auth for secure user login. The backend, powered by Firebase, manages podcast operations, offering 
users a smooth experience for podcast creation and playback.</p>
<div className='content-btn'>

              <Button buttonText="Demo" link="https://podcast-platform-ecru.vercel.app/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/podcastPlatform" />
</div>

            </div>
          </div>
  
          <div className="slides box" style={{ '--img': `url(${three})` }}>
            <div className="content">
              <h2>Google Sheet Clone</h2>
              <p>Google Sheet Clone, built with HTML, CSS, and JavaScript, features dynamic UI, efficient data handling with arrays, advanced manipulation, formula implementation, local storage, multiple sheets, and file handling capabilities.</p>
              <Button buttonText="Demo" link="https://pranshu-15.github.io/FrontEnd-2-Google-Sheet-Clone/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/FrontEnd-2-Google-Sheet-Clone" />

            </div>
          </div>
  
          <div className="slides box" style={{ '--img': `url(${four})` }}>
            <div className="content">
              <h2>Sub Reddit</h2>
              <p>Subreddit Explorer: Utilizing React.js, fetches Reddit API to display and search subreddits, enhancing browsing experience with efficient search functionality.</p>
              <Button buttonText="Demo" link="https://serene-choux-221d54.netlify.app/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/subredit" />
            </div>
          </div>
  
          <div className="slides box" style={{ '--img': `url(${five})` }}>
            <div className="content">
              <h2>Todo List</h2>
              <p>Efficient Todo List: Built with HTML, CSS, and JavaScript, this web app utilizes local storage to store todos, ensuring seamless user experience and data persistence.</p>
              <Button buttonText="Demo" link="https://pranshu-15.github.io/Todo-List/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/Todo-List" />
            </div>
          </div>
  
          <div className="slides box" style={{ '--img': `url(${six})` }}>
            <div className="content">
              <h2>Shopping Cart</h2>
              <p>Build a shopping cart app with React Redux. Fetch products from an API, add to cart, manage cart state, display cart items, and checkout with total price.</p>
              <Button buttonText="Demo" link="https://f4-module-test-shopping-cart.vercel.app/" />
              <Button buttonText="Source Code" link="https://github.com/Pranshu-15/f4-module-test-shopping-cart" />
            </div>
          </div>
          <div className="slides box" style={{ '--img': `url(${seven})` }}>
            <div className="content">
              <h2>Basic Calculator</h2>
              <p>Crafted with HTML, CSS, and JavaScript, the simple calculator efficiently performs basic arithmetic operations, offering a user-friendly interface for quick calculations.</p>
              <Button buttonText="Demo" link ="https://pranshu-15.github.io/Basic-Calculator/" />
              <Button buttonText="Source Code" link ="https://github.com/Pranshu-15/Basic-Calculator" />
            </div>
          </div>
          <div className="slides box" style={{ '--img': `url(${eight})` }}>
            <div className="content">
              <h2>Blinkit Clone</h2>
              <p> A clone of Blinkit created solely with HTML and CSS, mimicking the original web application's design and functionality</p>
              <Button buttonText="Demo" link ="https://pranshu-15.github.io/blinkit-clone/" />
              <Button buttonText="Source Code" link ="https://github.com/Pranshu-15/blinkit-clone" />
            </div>
          </div>
          <div className="slides box" style={{ '--img': `url(${nine})` }}>
            <div className="content">
              <h2>Spotify Clone</h2>
              <p>A clone of Spotify created solely with HTML and CSS, mimicking the original web application's design and functionality</p>
              <Button buttonText="Demo" link ="https://pranshu-15.github.io/spotify-clone/" />
              <Button buttonText="Source Code" link ="https://github.com/Pranshu-15/spotify-clone" />
            </div>
          </div>
          <div className="slides box" style={{ '--img': `url(${ten})` }}>
            <div className="content">
              <h2>Food Delivery App</h2>
              <p>Replicated a Figma design of a food delivery app using HTML and CSS, offering a visually appealing and responsive interface for seamless food ordering experiences.</p>
              <div className='content-btn'>

              <Button buttonText="Demo" link ="https://pranshu-15.github.io/spotify-clone/" />
              <Button buttonText="Source Code" link ="https://github.com/Pranshu-15/FrontendTestWeek3" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
        <span className="prev" onClick={prevSlide}></span>
        <span className="next" onClick={nextSlide}></span>
        </div>
      </div>
            </div>
        </div>
 
    );
};

export default ProjectSlider;
