import React from "react";
import './VideoDescriptionPage.css';
import VideoDescription from "../../components/video-description/VideoDescription";
import Modal from 'react-bootstrap/Modal';  

import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const APY_KEY = process.env.REACT_APP_TMDB_APYKEY;

const VideoDescriptionPage = ({movieId, show, handleClose}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieResults, setMovieResults] = useState(null);
  
    useEffect( () => {
      const api_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APY_KEY}&language=es-ES`;
       fetch(api_url)
        .then(data => data.json())
        .then(resultado => {
          //console.log(resultado.original_title);
            setMovieResults(resultado);
            setIsLoading(false);
          });
      

    }, [movieId]);

    if (isLoading) {
        return <Loader />;
      }
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="video-description-page-container">
              <div className="centered-div">
                  <VideoDescription datamovie={movieResults} >
                  </VideoDescription>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
 }
  
 export default VideoDescriptionPage