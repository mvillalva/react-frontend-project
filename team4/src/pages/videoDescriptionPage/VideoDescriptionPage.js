import React from "react";
import './VideoDescriptionPage.css';
import VideoDescription from "../../components/video-description/VideoDescription";

import { useEffect, useState } from "react";

const APY_KEY = process.env.REACT_APP_TMDB_APYKEY;

const VideoDescriptionPage = ({title}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieResults, setMovieResults] = useState(null);
  
    useEffect(() => {
      const api_url = `https://api.themoviedb.org/3/movie/550?api_key=${APY_KEY}&language=es-ES`;
      fetch(api_url)
      .then(data => data.json())
      .then(resultado => {
        console.log(resultado.original_title);
          setMovieResults(resultado);
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
      }
    
      return (
        <div className="video-description-page-container">
            <div className="centered-div">
                <VideoDescription title={title} datamovie={movieResults} >
                </VideoDescription>
            </div>
        </div>
      );
 }
  
 export default VideoDescriptionPage