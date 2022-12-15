import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import video from "../assets/video.mp4";
import { IoChevronDownCircleOutline, IoPlayCircleSharp } from "react-icons/io5";
import {HiOutlineThumbUp, HiOutlineThumbDown} from "react-icons/hi"
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";
import AddList from "./AddList";
import RemoveList from "./RemoveList";

let movieId;
const movies = 'movies'
const series = 'series'

export default React.memo(function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const showDescription = (e, data) => {        
      e.preventDefault()
      handleShow()
      movieId = data.id;

      data.media_type === "movie" ? setType(movies) : setType(series);
      
  } 

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}      
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />
      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player/" + movieData.media_type + "/" +movieData.id)}
            />
            {/* <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            /> */}
          </div>
          <div className="info-container d-flex flex-column">
            <h3 className="name" onClick={() => navigate("/player/" + movieData.media_type + "/" +movieData.id)}>
              {movieData.name}
            </h3>
            <div className="icons d-flex justify-content-between">
              <div className="controls d-flex justify-content-between w-100">
                <div className="d-flex">
                  <IoPlayCircleSharp
                    className="me-2"
                    title="play"
                    onClick={() => navigate("/player/" + movieData.media_type + "/" +movieData.id)}
                  />
                  {isLiked ? (
                    <RemoveList id={movieData.id} />
                    ) : (
                      <AddList id={movieData.id} media_type={movieData.media_type} name={movieData.name} image={movieData.image} genres={movieData.genres}/>
                  )}
                  <HiOutlineThumbUp className="me-2" title="Like" />
                  <HiOutlineThumbDown className="me-2" title="Dislike" />
                </div>
                <div className="info">
                  <IoChevronDownCircleOutline title="More info" onClick={(e) => {showDescription(e, movieData)}} />
                </div>
              </div>
            </div>
            <div className="genres d-flex justify-content-start">
              <ul className="d-flex flex-wrap">
                {movieData.genres.map((genre, index) => (
                  <li key={index}>{ genre }</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <VideoDescriptionPage 
          movieId={movieId}
          show={show}
          handleClose={handleClose}
          type={type}
      />      
    </Container>
  );
});

const Container = styled.div`
  max-width: 250px;
  width: 250px;
  height: 100%;
  cursor: pointer;
  position: relative;    
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 11;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;      
    }
    .name {
      font-size: 1.2rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }      
      svg {
        font-size: 2rem;
        cursor: pointer;        
        transition: 0.3s ease-in-out;
        border-radius: 50%;
        &:hover {
          color: #b8b8b8;
        }      
      }
    }
    .genres {
      ul {        
        gap: 1rem;
        padding-left: 0;
        margin-bottom: 0;
        li {          
          font-size: .85rem;
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
