import React, { useContext, useEffect, useState } from "react";
import './VideoDescriptionPage.css';
import VideoDescription from "../../components/video-description/VideoDescription";
import Modal from 'react-bootstrap/Modal';
import Loader from "../../components/loader/Loader";
import { MainContext } from "../../context/MainContext";

const APY_KEY = process.env.REACT_APP_TMDB_APYKEY;

const VideoDescriptionPage = ({movieId, show, handleClose, type}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieResults, setMovieResults] = useState(null); 
    const {language} = useContext(MainContext)
  
    useEffect( () => {
      if(type === "series"){
        const api_url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${APY_KEY}&language=${language}`;
        fetch(api_url)
         .then(data => data.json())
         .then(resultado => {
           //console.log(resultado.original_title);
             setMovieResults(resultado);
             setIsLoading(false);
         });
      } else {
        const api_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APY_KEY}&language=${language}`;
        fetch(api_url)
         .then(data => data.json())
         .then(resultado => {
           //console.log(resultado.original_title);
             setMovieResults(resultado);
             setIsLoading(false);
         });
      }      

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

   
    return isLoading ? <Loader /> :  
    (
      <Modal show={show} onHide={handleClose}>        
        <Modal.Body>
        <Modal.Header closeButton>
        </Modal.Header>
          <div className="video-description-page-container">
            <div className="centered-div">
                <VideoDescription datamovie={movieResults} type={type}>
                </VideoDescription>
            </div>
          </div>
        </Modal.Body>          
      </Modal>
    );
 }
  
 export default VideoDescriptionPage