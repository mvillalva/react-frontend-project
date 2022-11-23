import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ListadoBusqueda.css'
import nf from '../../img/no_movie.png'

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

export default function ListadoBusqueda(props){
    const {resultados} = props;
        
    const titulos = resultados.arreglo.map((resultado, index) => {
        return(
            <Col key={index}>
                <Card className="card-size">
                    <Card.Img className="card-img-size" variant="top" src={resultado.poster_path? BASE_IMG + resultado.poster_path : nf} alt="Poster pelicula" />
                    {/* <Card.Body className='text-dark'>
                        <Card.Title>{resultado.title}</Card.Title>
                        <Card.Text> 
                        Año de estreno: {resultado.release_date} - Categoria: {resultado.type}
                        </Card.Text>
                    </Card.Body> */}
                </Card>
            </Col>

        )
    })
    return(
        <div className="Lista">
            
            {   resultados.busqueda && 
            <Row xs={2} md={4} lg={6}  className="g-4 m-2">
                {titulos}
            </Row>
            }
        </div>
    );
}