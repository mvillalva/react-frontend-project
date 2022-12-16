import React, { useContext, useEffect } from "react";
import "./Home.css";
import TodayMovie from "../../components/todayMovie/TodayMovie";
import Slider from "../../pages/Netflix/Netflix";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const Home = (props) => {
  const {language} = useContext(MainContext)
  
  useEffect(() => {
    document.title = `${LANGUAGES[language].HOME_PAGE} — Team4`;
  });

  return (
    <>
      <div className="movie-container overflow-hidden">
        <TodayMovie />

        <div className="movie-slider">
          <Slider type="movie" />
        </div>
      </div>
    </>
  );
};

export default Home;
