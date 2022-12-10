import React, { useEffect } from "react";
import './Movies.css'
import TodayMovie from "../../components/todayMovie/TodayMovie";

const Movies = (props) => {

    useEffect( () => {
        document.title = 'Peliculas - Team4'
    })

    return (
        <div className="home-container overflow-hidden">            
            <TodayMovie />
        </div>
    )
}

export default Movies