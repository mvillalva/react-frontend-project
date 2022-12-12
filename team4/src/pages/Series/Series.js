import React, { useEffect } from "react";
import './Series.css';
import TodaySeries from "../../components/todaySeries/TodaySeries";
import Netflix from "../Netflix/Netflix";

const Series = (props) => {

    useEffect( () => {
        document.title = 'Series - Team4'
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