import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BASE_IMG = process.env.REACT_APP_BASE_URL_IMG;

export default function ListadoBusqueda(props){
    const {resultados} = props;
    console.log(props);
    const titulos = resultados.arreglo.map((resultado, index) => {
        return(
            <Col key={index}>
                <Card className='title-card'>
                <Card.Img variant="top" src={BASE_IMG + resultado.poster_path} alt="Poster pelicula" />
                {/* <Card.Body>
                    {/* <Card.Title>{resultado.Title}</Card.Title> */}
                    {/* <Card.Text> */}
                    {/*Año de estreno: {resultado.Year} - Categoria: {resultado.Type} */}
                    {/* </Card.Text> */}
                {/*</Card.Body> */}
                </Card>
            </Col>

        )
    })
    return(
        <div className="Lista">
            
            {   resultados.busqueda && 
            <Row xs={2} md={4} lg={6}  className="g-4 my-2">
                {titulos}
            </Row>
            }
        </div>
    );
}