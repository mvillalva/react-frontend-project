import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { ProfileContext } from '../../context/profileContext/ProfileContext'
import logo from '../../img/netflix-icon.svg'

const NavBar = (props) => {
    const thisLocation = useLocation();
    
    const {profile} = useContext(ProfileContext)
    
    return ( 
        thisLocation.pathname === '/home' ?
        <Navbar bg='transparent' variant='dark' expand='md' sticky="top" className="animate-container mt-2">
            <Container fluid>
                {/* <Navbar.Brand href="#" className="ms-5 logo-text">Netflix</Navbar.Brand> */}
                <Navbar.Brand href="#" className="ms-5"><img className='navbar-logo' src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                    
                        <li className="nav-item me-2">
                            <Link className="nav-link active" to="#" >Inicio <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="#">Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Películas</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="#">Novedades populares</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="#">Mi lista</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="#">Explora por idiomas</Link>
                        </li>
                    </Nav>                    
                </Navbar.Collapse>
                <div className="d-flex flex-row align-items-center">
                    <Link className="fas fa-search text-decoration-none text-light fs-5 me-4"></Link>
                    <span className="fas fa-bell text-decoration-none text-light fs-5 me-4"></span>
                    <span className={"nav-profile-icon me-5 " + profile.bg}></span>
                </div>
            </Container>
        </Navbar>        
        : ''
    )
}

export default NavBar