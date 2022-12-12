import React from 'react'
import './VideoDescription.css'

import DescripcionItem from "../../components/descripcionItem/DescripcionItem";

const VideoDescription = (props) => {
  // console.log(props)
  const {type} = props;
  // console.log(type);
  const webUrl = `https://image.tmdb.org/t/p/original/${props.datamovie.backdrop_path}`;

    return (
        <div className='video-description'>
          <div className='video-description-top'>
            <img alt={props.datamovie.title} src={webUrl}></img>
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
                { type === "movies" ? props.datamovie.title : props.datamovie.name}
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