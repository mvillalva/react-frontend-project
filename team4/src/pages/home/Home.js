import React, { useEffect, useState } from "react";
import "./Home.css";
import TodayMovie from "../../components/todayMovie/TodayMovie";
import Slider from "../../pages/Netflix/Netflix";

const Home = (props) => {
  useEffect(() => {
    document.title = "Página de inicio - Team4";
  });

  return (
    <div>
      <div className="movie-container overflow-hidden">
        <TodayMovie />
      </div>

      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
