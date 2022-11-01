import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Container, Nav} from 'react-bootstrap'


const NavBar = (props) => {
    const thisLocation = useLocation();
    console.log(thisLocation)
    return ( 
        thisLocation.pathname == '/home' ?        
        <Navbar bg='transparent' variant='dark' expand='md' sticky="top" className="animate-container">    
            <Container>
                <Navbar.Brand href="#" className="text-danger">Netflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                    
                        <li className="nav-item">
                            <Link className="nav-link active" to="#" >Inicio <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Novedades populares</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Mi lista</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Explora por idiomas</Link>
                        </li>
                    </Nav>                
                </Navbar.Collapse>
            </Container>
        </Navbar>        
        : ''
    )
}

export default NavBar