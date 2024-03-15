import React, { useState, useEffect } from 'react'
import '../styles/Carousel.css'

import leftArrow from '../images/arrow-carrot-left.png';
import rightArrow from '../images/arrow-carrot-right.png';
import filledIndicator from '../images/blackdot.png';
import emptyIndicator from '../images/circle-empty.png';

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = props.pics.length - 1;
    } else if (newIndex >= props.pics.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, props.pics.length]);


  return (
    <div className="carousel">
      <div className="frame">
        <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {props.pics.map((item, index) => {
            return <img className="carousel-img" src={item}></img>
          })}
        </div>
      </div>

      <div className="carousel-bottom-bar" >
        <button className="button-arrow" onClick={() => { updateIndex(activeIndex - 1) }}>
          <img className="arrows" src={leftArrow} />
        </button>
        <div className="indicators">
          {props.pics.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="button-arrow"
              >
                <img clasName="dots" src={index === activeIndex ? filledIndicator : emptyIndicator} />
              </button>
            )
          })}
        </div>

        <button className="button-arrow" onClick={() => { updateIndex(activeIndex + 1) }}>
          <img className="arrows" src={rightArrow} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;