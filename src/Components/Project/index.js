
import React, { useEffect, useState } from 'react';
import './style.css'

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');
        const sliderDom = carouselDom.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

        const timeRunning = 3000;
        const timeAutoNext = 7000;

        let runTimeOut;
        let runNextAuto;

      //   const showNextSlide = () => {
      //     const sliderItems = Array.from(sliderDom.querySelectorAll('.carousel .list .item'));
      //     const currentSlide = sliderItems[currentIndex].cloneNode(true);
      //     const currentThumbnail = thumbnailItemsDom[currentIndex].cloneNode(true);
      
      //     sliderDom.appendChild(currentSlide);
      //     thumbnailBorderDom.appendChild(currentThumbnail);
      
      //     setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
      
      //     carouselDom.classList.add('next');
      
      //     setTimeout(() => {
      //         carouselDom.classList.remove('next');
      //         sliderDom.removeChild(sliderItems[0]);
      //         thumbnailBorderDom.removeChild(thumbnailItemsDom[0]);
      //     }, 500);
      
      //     clearTimeout(runTimeOut);
      //     runTimeOut = setTimeout(() => {
      //         nextDom.click();
      //     }, timeAutoNext);
      // };
      const tempHolder = document.createElement('div');
      const showNextSlide = () => {
        const sliderItems = Array.from(sliderDom.querySelectorAll('.carousel .list .item'));
        const currentSlide = sliderItems[currentIndex].cloneNode(true);
        const currentThumbnail = thumbnailItemsDom[currentIndex];

  tempHolder.appendChild(currentSlide);
  tempHolder.appendChild(currentThumbnail);

  sliderDom.appendChild(sliderItems[(currentIndex + 1) % sliderItems.length]);
  thumbnailBorderDom.appendChild(thumbnailItemsDom[(currentIndex + 1) % sliderItems.length]);

  sliderDom.insertBefore(currentSlide, sliderDom.firstChild);
  thumbnailBorderDom.insertBefore(currentThumbnail, thumbnailBorderDom.firstChild);

      
        sliderDom.appendChild(currentSlide);
        thumbnailBorderDom.appendChild(currentThumbnail);
      
        const nextIndex = (currentIndex + 1) % sliderItems.length;
        setCurrentIndex(nextIndex);  // Update currentIndex directly
      
        carouselDom.classList.add('next');
      
        setTimeout(() => {
          carouselDom.classList.remove('next');
          sliderDom.removeChild(sliderItems[currentIndex]);
          thumbnailBorderDom.removeChild(thumbnailItemsDom[currentIndex]);
        }, 500);
      
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      };
      
      // const showPrevSlide = () => {
      //     const sliderItems = Array.from(sliderDom.querySelectorAll('.carousel .list .item'));
      //     const lastSlide = sliderItems[sliderItems.length - 1].cloneNode(true);
      //     const currentThumbnail = thumbnailItemsDom[currentIndex].cloneNode(true);
      
      //     sliderDom.prepend(lastSlide);
      //     thumbnailBorderDom.prepend(currentThumbnail);
      
      //     setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length);
      
      //     carouselDom.classList.add('prev');
      
      //     setTimeout(() => {
      //         carouselDom.classList.remove('prev');
      //         sliderDom.removeChild(sliderItems[sliderItems.length - 1]);
      //         thumbnailBorderDom.removeChild(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      //     }, 500);
      
      //     clearTimeout(runTimeOut);
      //     runTimeOut = setTimeout(() => {
      //         nextDom.click();
      //     }, timeAutoNext);
      // };
      
      const showPrevSlide = () => {
        const sliderItems = Array.from(sliderDom.querySelectorAll('.carousel .list .item'));
  const currentSlide = sliderItems[currentIndex];
  const currentThumbnail = thumbnailItemsDom[currentIndex];

  tempHolder.appendChild(currentSlide);
  tempHolder.appendChild(currentThumbnail);

  const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
  sliderDom.prepend(sliderItems[prevIndex]);
  thumbnailBorderDom.prepend(thumbnailItemsDom[prevIndex]);

  sliderDom.appendChild(currentSlide);
  thumbnailBorderDom.appendChild(currentThumbnail);

  // Remove the last appended items (which are the originals)
  sliderDom.removeChild(sliderDom.lastChild);
  thumbnailBorderDom.removeChild(thumbnailBorderDom.lastChild);

  setCurrentIndex(prevIndex);
  carouselDom.classList.add('prev');

  setTimeout(() => {
    carouselDom.classList.remove('prev');
  }, 500);

      
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      };
      
      

        nextDom.addEventListener('click', showNextSlide);
        prevDom.addEventListener('click', showPrevSlide);

        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        return () => {
            nextDom.removeEventListener('click', showNextSlide);
            prevDom.removeEventListener('click', showPrevSlide);
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, [currentIndex]);

    return (
        <div className="carousel">
            {/* list item */}
            <div className="list">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1713390110946-2a966eebd346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="Slider 1"/>
                    <div className="content">
                        <div className="author">Pranshu</div>
                        <div className="title">Podcast Platform</div>
                        <div className="topic">React.js</div>
                        <div className="des">
                            {/* lorem 50 */}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>DEMO</button>
                            <button>Github</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1713215008252-1316344fb5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" alt="Slider 1"/>
                    <div className="content">
                        <div className="author">Pranshu</div>
                        <div className="title">CryptoCurrency</div>
                        <div className="topic">React.js</div>
                        <div className="des">
                            {/* lorem 50 */}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>DEMO</button>
                            <button>Github</button>
                        </div>
                    </div>
                </div>
                {/* Add more items as needed */}
            </div>
            {/* list thumnail */}
            <div className="thumbnail">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1713390110946-2a966eebd346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 1"/>
                    <div className="content">
                        <div className="title">
                            Podcast Platform
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1713215008252-1316344fb5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D" alt="Thumbnail 1"/>
                    <div className="content">
                        <div className="title">
                            CryptoCurrency
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div>
                {/* Add more thumbnail items as needed */}
            </div>
            {/* next prev */}
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            {/* time running */}
            <div className="time"></div>
        </div>
    );
}

export default Project;


