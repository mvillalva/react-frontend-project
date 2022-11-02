import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Container, Nav} from 'react-bootstrap'


const NavBar = (props) => {
    const thisLocation = useLocation();
    console.log(thisLocation)
    return ( 
        thisLocation.pathname === '/home' ?        
        <Navbar bg='transparent' variant='dark' expand='md' sticky="top" className="animate-container mt-2">    
            <Container fluid>
                <Navbar.Brand href="#" className="ms-5 text-danger">Netflix</Navbar.Brand>
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
                <div className="d-flex flex-row ">
                    <Link className="fas fa-search text-decoration-none text-light fs-5 me-4"></Link>
                    <span className="fas fa-bell text-decoration-none text-light fs-5 me-4"></span>
                    <span className="nav-profile-icon bg-5 me-5"></span>
                </div>
            </Container>
        </Navbar>        
        : ''
    )
}

export default NavBar