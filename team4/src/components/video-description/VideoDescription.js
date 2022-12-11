import React from 'react'
import './VideoDescription.css'

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
              <p><span className='video-description-info-categoria'>Elenco:</span> <a href="https://netflix.com">Mellisa Roxburgh</a>, <a href="https://netflix.com">Josh Dallas</a>, <a href="https://netflix.com">Athena Karkanis</a>, más</p>
              <p><span className='video-description-info-categoria'>Género:</span> <a href="https://netflix.com">Series de misterio</a>, <a href="https://netflix.com">Series de sci-fi</a>, <a href="https://netflix.com">Series dramáticas</a></p>
              <p><span className='video-description-info-categoria'>Este título es:</span> <a href="https://netflix.com">Surreslista</a>, <a href="https://netflix.com">De suspenso</a></p>
            </div>

          </div>
        </div>
    )
}

export default VideoDescription