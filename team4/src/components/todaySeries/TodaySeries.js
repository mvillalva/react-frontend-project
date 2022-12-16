import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import "./TodaySeries.css";
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";
import useRandomSeries from "../../hooks/useRandomSeries";
import MediaTypeLabel from "../mediaTypeLabel/MediaTypeLabel";
import {AiOutlineInfoCircle} from "react-icons/ai"
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let seriesId;
const series = 'series';    // hard

const TodaySeries = () => {
    const [show, setShow] = useState(false);
    const {language} = useContext(MainContext)

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
                        <div className={(showPlayer ? "smaller" : "normal")}>
                            <div className="home-movie-title" >
                                <MediaTypeLabel media_type={'tv'}/>
                            </div>
                            <div className="home-movie-title" >{loadedSeries.name}</div>
                            <div className={"home-movie-overview " + (showPlayer ? "smaller2" : "normal2")} >
                                {loadedSeries.overview}                                    
                            </div>
                        </div>
                        <div className="home-movie-buttons mt-3">
                            <Link to={"/player/tv/"+loadedSeries.id} className="home-movie-button-rep"><span className="fas fa-play fs-5"></span> {LANGUAGES[language].PLAY}</Link>
                            <Link to="#" className="home-movie-button-info" onClick={(e)=>{showDescription(e, loadedSeries.id)}}><AiOutlineInfoCircle className="fs-4" /> {LANGUAGES[language].MORE_INFO}</Link>
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