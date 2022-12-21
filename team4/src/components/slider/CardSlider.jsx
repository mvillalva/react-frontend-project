import React, { useState, useRef } from "react";
import { useContext } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import { MainContext } from "../../context/MainContext";
import Card from "./Card";

export default React.memo(function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const {currentProfile} = useContext(MainContext)
  const listRef = useRef();

  const handleDirection = (direction) => {
    const windWidth = window.innerWidth
    const slide_with = Math.trunc(windWidth / 250) * 250
    const max_slides = Math.trunc((250 * 10) / slide_with)

    let distance = listRef.current.getBoundingClientRect()['x'];

    if (direction === "left" && sliderPosition > 0) {
      let firstDistance = sliderPosition === 1 ? 0 : slide_with+distance

      if (slide_with+distance > 0) {
        firstDistance = 0
        setSliderPosition(1)
      }
      
      listRef.current.style.transform = `translateX(${firstDistance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < max_slides) { 
      let lastDistance = (slide_with * -1) + (distance-(50+(sliderPosition*2)))

      if (sliderPosition === max_slides-1) {
        lastDistance = distance-slide_with+50
        setSliderPosition(max_slides)
      }

      listRef.current.style.transform = `translateX(${lastDistance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  const liked = (id) => {
    return (currentProfile.playlist.filter(item => item.id === id).length > 0)
  }

  return (
    <Container
      className="d-flex flex-column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h5>{title}</h5>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "d-none" : ""
          } d-flex justify-content-center align-items-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="d-flex slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} isLiked={liked(movie.id)}/>;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? "d-none" : ""
          } d-flex justify-content-center align-items-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});
const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h5 {
    margin-left: 50px;
    font-weight: 600;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      top:79px;
      left: 0px;
      height:57%;
      background-color: rgba(20, 20, 20, .5);
      cursor:pointer;
    }
    .right {
      top:79px;
      right: 0;      
      height:57%;
      background-color: rgba(20, 20, 20, .5);
      cursor:pointer;
    }
  }
`;
