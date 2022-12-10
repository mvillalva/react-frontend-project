import React, { useEffect } from "react";
import './Series.css';
import TodaySeries from "../../components/todaySeries/TodaySeries";

const Series = (props) => {

    useEffect( () => {
        document.title = 'Series - Team4'
    })

    return (
        <div className="home-container overflow-hidden">            
            <TodaySeries />
        </div>
    )
}

export default Series