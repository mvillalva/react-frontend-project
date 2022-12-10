import React, { useEffect } from "react";
// import './Movies.css'
// import TodayMovie from "../../components/todayMovie/TodayMovie";
import TodaySeries from "../../components/todaySeries/TodaySeries";

const Series = (props) => {

    useEffect( () => {
        document.title = 'Series - Team4'
    })

    return (
        <div className="home-container overflow-hidden">            
            {/* <TodayMovie /> */}
            <TodaySeries />
        </div>
    )
}

export default Series