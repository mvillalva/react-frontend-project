import React, { useContext, useEffect } from "react";
import './Series.css';
import TodaySeries from "../../components/todaySeries/TodaySeries";
import Netflix from "../Netflix/Netflix";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const Series = (props) => {
    const {language} = useContext(MainContext)

    useEffect( () => {
        document.title = `${LANGUAGES[language].TV_SHOWS} - Team4`
    })

    return (
        <>
            <div className="home-container overflow-hidden">            
                <TodaySeries />
                <div className="movie-slider">
                    <Netflix type="tv" mediaType="tv" />
                </div>
            </div>
        </>
    )
}

export default Series