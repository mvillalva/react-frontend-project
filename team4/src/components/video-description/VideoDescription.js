import React from 'react'
import './VideoDescription.css'

const VideoDescription = (props) => {

    return (
        <div className='video-description'>
          <div className='video-description-top'>
            <img className='nombre-pelicula' alt="Manifiesto" src="https://occ-0-3792-2774.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWBK3QW9eLKji-Aiszy-XKDYMFb38p9c5APFJS4bUZ9sEZaLTDeF__qCg8Ov760nY4eeyoPYCDcUaAfOpJkZQ96tIUIXybRPEyzAN3DiX635M5zbYdUfGYrGsvLwIriw7XJcBQCn6EFQzFkc4QrqpNZjPNEg9Uk_jmoIdYcq2Yzu1WUrkNjD.webp?r=21f"></img>
          </div>
          <div className='video-description-info-container'>
            <div className='video-description-info-container-left'>
              <div className='info-general'>
                <span className='porcentaje'>97% para tí</span>
                <span className='anio'>2022</span>
                <span className='maturity'>13+</span>
                <span className='temporadas'>4 temporadas</span>
                <span className='hd'>HD</span>
              </div>
              <div className='info-general-2'>
                <span className='ranking'>N.º 3 en TV hoy</span>
              </div>
              <p className='video-description-info-description'>Un avión aterriza misteriosamente años después de despegar, y las personas a bordo vuelven a un mundo que ha continuado sin ellos y afrontan nuevas y extrañas realidades.</p>
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