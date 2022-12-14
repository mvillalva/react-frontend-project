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
    let distance = listRef.current.getBoundingClientRect().x - 70 ;

    if (direction === "left" && sliderPosition > 0) {
      let firstDistance = sliderPosition === 1 ? 0 : 250+distance
      
      listRef.current.style.transform = `translateX(${firstDistance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < (windWidth < 492 ? 8 : 5)) { 
      let lastDistance = sliderPosition === (windWidth < 492 ? 7 : 4) ? -250 - 70 + distance  : -250 + distance

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
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
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
            !showControls ? "none" : ""
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
  h1 {
    margin-left: 50px;
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
      top:30px;
      left: 0;
      cursor:pointer;
    }
    .right {
      top:30px;
      right: 0;
      cursor:pointer;
    }
  }
`;
