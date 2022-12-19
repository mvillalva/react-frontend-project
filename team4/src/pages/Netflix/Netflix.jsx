import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/slider/Slider";
import { useContext } from "react";
import {MainContext} from "../../context/MainContext"

export default function Netflix({type, mediaType='all'}) {
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const {language} = useContext(MainContext)

  useEffect(() => {
    dispatch(getGenres({language, type}));
  }, [dispatch, language, type]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: mediaType, language: language }));
  });

  return (
    <Container>
      <Slider movies={movies}/>
    </Container>
  );
}

const Container = styled.div`  
  height: 100%;  
  background-image: linear-gradient(rgba(20,20,20,0), rgba(20,20,20,0.9), 12%, rgb(20,20,20));
`;