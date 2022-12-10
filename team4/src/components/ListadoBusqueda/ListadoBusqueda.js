import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ListadoBusqueda.css'
import nf from '../../img/no_movie.png'
import VideoDescriptionPage from '../../pages/videoDescriptionPage/VideoDescriptionPage';

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

let titleID;

export default function ListadoBusqueda(props){
    const {resultados} = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const showDescription = (id) => {        
        handleShow()
        titleID = id;
    } 
        
    const titulos = resultados.arreglo.map((resultado, index) => {
        return(
            <Col key={index}>
                <Card className="card-size">
                    <Card.Img 
                        className="card-img-size" 
                        variant="top" 
                        src={resultado.poster_path? BASE_IMG + resultado.poster_path : nf} 
                        alt="Poster pelicula"
                        onClick={() => showDescription(resultado.id)}
                    />
                </Card>
            </Col>

        )
    })
    return(
        <div className="Lista">
            
            {   resultados.busqueda && 
            <Row xs={2} md={4} lg={6}  className="g-4 m-2 my-5">
                {titulos}
                <VideoDescriptionPage 
                    movieId={titleID} 
                    show={show} 
                    handleClose={handleClose}
                >
                </VideoDescriptionPage>
            </Row>
            }
        </div>
    );
}