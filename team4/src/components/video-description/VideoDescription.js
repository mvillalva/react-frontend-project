import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './VideoDescription.css'
import DescripcionItem from "../../components/descripcionItem/DescripcionItem";
import AddList from '../slider/AddList';
import { MainContext } from '../../context/MainContext';
import RemoveList from '../slider/RemoveList';

const VideoDescription = (props) => {
  const [genres, setGenres] = useState([])
  const {currentProfile} = useContext(MainContext)    
  const {type} = props;  
  const webUrl = `https://image.tmdb.org/t/p/original/${props.datamovie.backdrop_path}`;

  const name = type === "movies" ? props.datamovie.title : props.datamovie.name
  const media_type = type === 'movies'? 'movie' : 'tv'

  const liked = (id) => currentProfile.playlist.filter(item => item.id === props.datamovie.id).length > 0

  useEffect(() => {
    const genresList = [];

    if (props.datamovie.genres) {
      console.log(props.datamovie.genres)
      props.datamovie.genres.forEach((genre) => {        
        if (genre.name) genresList.push(genre.name);
      });
    }

    setGenres(genresList)

  }, [props.datamovie])
    
  return (
      <div className='video-description'>
        <div className='video-description-top'>
          <Link to={"/player/"+ media_type +"/"+props.datamovie.id}><img alt={props.datamovie.title} src={webUrl}></img></Link>
          <div className='video-icons'>
            <Link to={"/player/"+ media_type +"/"+props.datamovie.id} className="home-movie-button-rep"><span className="fas fa-play fs-5"></span> Reproducir</Link>
            {liked(props.datamovie.id) ? <RemoveList id={props.datamovie.id} /> : <AddList id={props.datamovie.id} media_type={media_type} name={name} image={props.datamovie.backdrop_path} genres={genres}/>}
          </div>
        </div>
        <div className='video-description-info-container'>
          <div className='video-description-info-container-left'>
            <div className='info-general'>
              <span className='porcentaje'>97% para tí</span>
              <span className='anio'>
                { type === "movies" ? props.datamovie.release_date : props.datamovie.first_air_date }
              </span>
              <span className='maturity'>13+</span>
              <span className='temporadas'>4 temporadas</span>
              <span className='hd'>HD</span>
            </div>
            <div className='info-general-2'>
              <span className='ranking'>
              { name }
              </span>
              {/* <span className='ranking'>N.º 3 en TV hoy</span> */}
            </div>
            <p className='video-description-info-description'>
              {props.datamovie.overview === "" ? 'Sin descripcion disponible' : props.datamovie.overview}
            </p>
          </div>
          <div className='video-description-info-container-right'>
            <p>
              <span className='video-description-info-categoria'>Elenco: </span> 
              <DescripcionItem link="https://netflix.com" label="Mellisa Roxburgh"></DescripcionItem>, <DescripcionItem link="https://netflix.com" label="Josh Dallas"></DescripcionItem>, <DescripcionItem link="https://netflix.com" label="Athena Karkanis"></DescripcionItem>, más
            </p>
            <p>
              <span className='video-description-info-categoria'>Género: </span> 
              <DescripcionItem link="https://netflix.com" label="Series de Misterio"></DescripcionItem>, <DescripcionItem link="https://netflix.com" label="Series de sci-fi"></DescripcionItem>, <DescripcionItem link="https://netflix.com" label="Series dramáticas"></DescripcionItem>
            </p>
            <p>
              <span className='video-description-info-categoria'>Este título es: </span> 
              <DescripcionItem link="https://netflix.com" label="Surrealista"></DescripcionItem>, <DescripcionItem link="https://netflix.com" label="De suspenso"></DescripcionItem></p>
          </div>
        </div>
      </div>
  )
}

export default VideoDescription