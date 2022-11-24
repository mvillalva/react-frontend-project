import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { controlVideo, getRandomInt } from "../../functions/general";
import { getMovieClips, getTopMovies } from "../../functions/movieApi";
import Loader from "../loader/Loader";
import "./TodayMovie.css";
import Modal from 'react-bootstrap/Modal';
import VideoDescriptionPage from "../../pages/videoDescriptionPage/VideoDescriptionPage";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let movieId;

const TodayMovie = () => {
    const [loadedMovie, setLoadedMovie] = useState(null)
    const [loadedClip, setLoadedClip] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [movie, setMovie] = useState()

    const showDescription = (e, id) => {        
        e.preventDefault()
        handleShow()
        movieId = id;     
    }

    const showClip = (video) => {
        setTimeout(() => {
            setLoadedClip(video)

            setTimeout(() => {
                document.getElementById('play').click()
            }, 1200)

            setTimeout(setLoadedClip(null), 62000)

        }, 3000)
    }

    const getClip = async (id) => {
        console.log(id)
        const movieClips = await getMovieClips(id)
        const videoClip = movieClips.length > 0 ? <iframe id="iframe" className="home-movie-video" title="Video" src={`https://www.youtube.com/embed/${movieClips[0].key}?rel=0&enablejsapi=1`} allow="autoplay; encrypted-media"></iframe> : null

        showClip(videoClip)
    }

    const getMovie = async () => {
        const movies = await getTopMovies()
        const index = getRandomInt(0, 19)
        
        setLoadedMovie(movies[index])
        
        getClip(movies[index].id)
    }

    useEffect(()=>{
        getMovie()
    }, [])

    return (        
        <div className="movie_container">
            { loadedMovie ? 
                <div className="home-movie">
                    <img src={BASE_IMG + loadedMovie.backdrop_path} alt='news' className="home-movie-img"></img>
                    {loadedClip ? loadedClip : '' }
                    <div className="home-info-container">
                        <div className={loadedClip ? "home-movie-title fs-4" : "home-movie-title " }>{loadedMovie.title}</div>
                        <p className="home-movie-overview">{!loadedClip ? loadedMovie.overview : ''}</p>
                        <div className="home-movie-buttons">
                            <Link to="#" className="home-movie-button-rep" id="play" onClick={(e)=>{controlVideo('playVideo', e)}}><span className="fas fa-play fs-5"></span> Reproducir</Link>
                            <Link to="#" className="home-movie-button-info" onClick={(e)=>{showDescription(e, loadedMovie.id)}}><span className="fas fa-info-circle fs-5"></span> Más informaicón</Link>
                        </div>
                    </div>
                </div>
                : <Loader />
            }

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
