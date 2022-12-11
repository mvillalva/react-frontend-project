import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import "./TodaySeries.css";
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";
import useRandomSeries from "../../hooks/useRandomSeries";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let seriesId;
const series = 'series';    // hard

const TodaySeries = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const showDescription = (e, id) => {        
        e.preventDefault()
        handleShow()
        seriesId = id;
        // console.log(id);
    } 

    const {loadedSeries, loadedClip, showPlayer} = useRandomSeries()
    //console.log(loadedSeries);   // BORRAR ESTA LINEA SOLO DATO PARA VER SERIE QUE TRAE

    return (        
        <div className="movie_container">
            { loadedSeries ? 
                <div className="home-movie">
                    <img src={BASE_IMG + loadedSeries.backdrop_path} alt='news' className="home-movie-img"></img>
                    {showPlayer ? loadedClip : '' }
                    <div className="home-info-container">
                        <div className={"home-movie-title " + (showPlayer ? "smaller" : "") }>
                            <span className="home-movie-series">Series</span>
                        </div>
                        <div className={"home-movie-title " + (showPlayer ? "smaller" : "") }>{loadedSeries.name}</div>
                        <p className={"home-movie-overview " + (showPlayer ? "smaller" : "")}>{loadedSeries.overview}</p>
                        <div className="home-movie-buttons">
                            <Link to="#" className="home-movie-button-rep"><span className="fas fa-play fs-5"></span> Reproducir</Link>
                            <Link to="#" className="home-movie-button-info" onClick={(e)=>{showDescription(e, loadedSeries.id)}}><span className="fas fa-info-circle fs-5"></span> Más informaicón</Link>
                        </div>
                    </div>

                    <VideoDescriptionPage 
                        movieId={seriesId} 
                        show={show} 
                        handleClose={handleClose} 
                        type={series}>
                    </VideoDescriptionPage>
                    <div className="home-movie-bottom"></div>
                </div>
                : <Loader />
            }
        </div>
    );
};

export default TodaySeries;