import React, { useEffect } from "react";
import './Movies.css'
import TodayMovie from "../../components/todayMovie/TodayMovie";
import Netflix from "../Netflix/Netflix";

const Movies = (props) => {

    useEffect( () => {
        document.title = 'Peliculas - Team4'
    })

    return (
        <>
            <div className="home-container overflow-hidden">            
                <TodayMovie />
            </div>
            <div className="movie-slider">
                <Netflix type="movie" mediaType="movie"/>
            </div>
        </>
    )
}

export default Movies