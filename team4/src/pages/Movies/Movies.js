import React, { useContext, useEffect } from "react";
import './Movies.css'
import TodayMovie from "../../components/todayMovie/TodayMovie";
import Netflix from "../Netflix/Netflix";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const Movies = (props) => {
    const {language} = useContext(MainContext)

    useEffect( () => {
        document.title = `${LANGUAGES[language].MOVIES} — Team4`
    })

    return (
        <>
            <div className="home-container overflow-hidden">            
                <TodayMovie type="movie"/>
                <div className="movie-slider">
                    <Netflix type="movie" mediaType="movie"/>
                </div>
            </div>
        </>
    )
}

export default Movies