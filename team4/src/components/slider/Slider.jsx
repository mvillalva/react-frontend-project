import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Lo mas visto" data={getMoviesFromRange(0, 10)} />
      <CardSlider
        title="Nuevos lanzamientos"
        data={getMoviesFromRange(10, 20)}
      />
      <CardSlider title="BlockBuster" data={getMoviesFromRange(20, 30)} />
      <CardSlider title="Popular" data={getMoviesFromRange(30, 40)} />
      <CardSlider
        title="Peliculas de accion"
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider title="Epicos" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
