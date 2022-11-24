import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomInt } from "../../functions/general";
import { getTopMovies } from "../../functions/movieApi";
import "./TodayMovie.css";

import Modal from 'react-bootstrap/Modal';
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let movieId;

const TodayMovie = () => {
    const loader =  <div className="loader-container">
                        <div className="loader"></div>
                    </div>

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [movie, setMovie] = useState()

    const showDescription = (e, id) => {        
        e.preventDefault()
        handleShow()
        movieId = id;
        //console.log('ID', id)
    }
        
    useEffect(
        () => {
            const getMovies = async () => {
                const movies = await getTopMovies()
                const index = getRandomInt(0, 19)                

                const html =<div className="home-movie">
                                <img src={BASE_IMG + movies[index].backdrop_path} alt='news' className="home-movie-img"></img>
                                <div className="home-info-container">
                                    <div className="home-movie-title">{movies[index].title}</div>
                                    <p className="home-movie-overview">{movies[index].overview}</p>
                                    <div className="home-movie-buttons">
                                        <Link to="#" className="home-movie-button-rep"><span className="fas fa-play fs-5"></span> Reproducir</Link>
                                        <Link to="#" className="home-movie-button-info" onClick={(e)=>{showDescription(e, movies[index].id)}}><span className="fas fa-info-circle fs-5"></span> Más informaicón</Link>
                                    </div>
                                </div>
                                
                            </div>

                setMovie(html)        
            } 
            
            if (!movie) {
                getMovies()
            }
    }, [movie])

    return (
        <div className="movie_container">
            {movie? movie : loader}

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <VideoDescriptionPage movieId={movieId}>
                </VideoDescriptionPage>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default TodayMovie;
