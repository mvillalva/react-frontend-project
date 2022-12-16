import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import "./TodayMovie.css";
import {AiOutlineInfoCircle} from "react-icons/ai"
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";
import useRandomMovie from "../../hooks/useRandomMovie";
import MediaTypeLabel from "../mediaTypeLabel/MediaTypeLabel";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let movieId;

const TodayMovie = ({type=''}) => {
    const [show, setShow] = useState(false);
    const {language} = useContext(MainContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const showDescription = (e, id) => {        
        e.preventDefault()
        handleShow()
        movieId = id;
    } 

    
    const {loadedMovie, loadedClip, showPlayer, media_type} = useRandomMovie(type)    
    const media = media_type === 'movie' ? 'movies' : 'series'    

    return (        
        <div className="movie_container">
            { loadedMovie ? 
                <div className="home-movie">
                    <img src={BASE_IMG + loadedMovie.backdrop_path} alt='news' className="home-movie-img"></img>
                    {showPlayer ? loadedClip : '' }
                    <div className="home-info-container">
                        <div className="home-info-layer">
                            <div className={(showPlayer ? "smaller" : "normal")}>
                                <div className="home-movie-title" >
                                    <MediaTypeLabel media_type={media_type}/>
                                </div>
                                <div className="home-movie-title" >{loadedMovie?.title ? loadedMovie.title : loadedMovie.name}</div>
                                <div className={"home-movie-overview " + (showPlayer ? "smaller2" : "normal2")} >
                                    {loadedMovie.overview}                                    
                                </div>
                            </div>
                            
                            <div className="home-movie-buttons mt-3">
                                <Link to={"/player/movie/"+loadedMovie.id} className="home-movie-button-rep"><span className="fas fa-play fs-5"></span> {LANGUAGES[language].PLAY}</Link>
                                <Link to="#" className="home-movie-button-info" onClick={(e)=>{showDescription(e, loadedMovie.id)}}><AiOutlineInfoCircle className="fs-4" /> {LANGUAGES[language].MORE_INFO}</Link>
                            </div>
                        </div>
                    </div>

                    <VideoDescriptionPage 
                        movieId={movieId}
                        show={show}
                        handleClose={handleClose}
                        type={media}
                    >
                    </VideoDescriptionPage>
                    <div className="home-movie-bottom"></div>
                </div>
                : <Loader />
            }
        </div>
    );
};

export default TodayMovie;