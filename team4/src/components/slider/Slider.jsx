import React from "react";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ movies }) {
  const {language} = useContext(MainContext)

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title={LANGUAGES[language].TRENDING_NOW} data={getMoviesFromRange(0, 10)} />
      <CardSlider
        title={LANGUAGES[language].NEW_RELEASES}
        data={getMoviesFromRange(10, 20)}
      />
      <CardSlider title={LANGUAGES[language].WATCH_WEEKEND} data={getMoviesFromRange(20, 30)} />
      <CardSlider title={LANGUAGES[language].POPULAR} data={getMoviesFromRange(30, 40)} />
      <CardSlider
        title={LANGUAGES[language].ACTION_THRILLERS}
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider title={LANGUAGES[language].EPICS} data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
