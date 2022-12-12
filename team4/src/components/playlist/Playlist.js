import React, { useContext, useEffect, useState } from "react";
import { Col, Card, Row } from "react-bootstrap/";
import { getMediaList } from "../../functions/movieApi";
import nf from "../../img/no_movie.png";
import VideoDescriptionPage from '../../pages/videoDescriptionPage/VideoDescriptionPage';
import {MainContext} from '../../context/MainContext'
import "./Playlist.css";

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;
let titleID;

const movies = "movies";
const series = "series"; 

const Playlist = ({ data }) => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);    
    const [type, setType] = useState("")
    const {language} = useContext(MainContext)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const showDescription = (id, type2) => {
        handleShow();
        type2 === "movie" ? setType(movies) : setType(series);        
        titleID = id;
    };

    useEffect(() => {
        const getList = async () => {
            const datas = await getMediaList(
                [
                    { id: 436270, media_type: "movie" },
                    { id: 119051, media_type: "tv" },
                ],
                language
            );            
            setList(datas);
        };

        getList();
    }, [language]);

    const titulos = list.map((resultado, index) => {        
        return (
            <Col key={index}>
                <Card className="card-size" onClick={() => showDescription(resultado.id, resultado.media_type)}>                
                    <Card.Img className="card-img-size" variant="top" src={resultado.poster_path ? BASE_IMG + resultado.poster_path : nf} alt="Poster pelicula" />
                    <Card.Body className="card-description">
                        <Card.Title>{resultado.media_type === "movie" ? resultado.title : `${resultado.original_name} (Series)`}</Card.Title>
                        <Card.Text>
                            <span>Fecha de Estreno: </span>
                            <span>{resultado.media_type === "movie" ? resultado.release_date : resultado.first_air_date}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <>
            <h1 className="ps-5">Mi lista</h1>
            <div className="Lista">
                {titulos && (
                    <Row xs={2} md={4} lg={6} className="g-4 m-2 my-5">
                        {titulos}
                        <VideoDescriptionPage 
                            movieId={titleID} 
                            show={show} 
                            handleClose={handleClose}
                            type={type}
                        />
                    </Row>
                )}
            </div>
        </>
    );
};

export default Playlist;
