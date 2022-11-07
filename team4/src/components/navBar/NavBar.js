import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { ProfileContext } from '../../context/profileContext/ProfileContext'
import logo from '../../img/netflix-icon.svg'
import Form from 'react-bootstrap/Form';

const NavBar = (props) => {
    const thisLocation = useLocation();
    
    const {profile} = useContext(ProfileContext)    

    const findText = () => {
        let rta = false
        for (let index = 0; index < props.filter.length; index++) {
            const element = props.filter[index];            
            
            if (thisLocation.pathname.search(element) === 0){
                console.log(element)
                console.log(thisLocation.pathname.search(element))
                rta = true
            }
        }
        
        return rta
    }

    console.log(props.filter.find(e => thisLocation.pathname.indexOf(e) > 0))
        
    return ( 
        !findText() && thisLocation.pathname !== '/' ?
        <Navbar bg='transparent' variant='dark' expand='md' sticky="top" className="animate-container mt-2">
            <Container fluid>
                {/* <Navbar.Brand href="#" className="ms-5 logo-text">Netflix</Navbar.Brand> */}
                <Navbar.Brand href="#" className="ms-5"><img className='navbar-logo' src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                    
                        <li className="nav-item me-2">
                            <Link className="nav-link active" to="/home" >Inicio <span className="visually-hidden">(current)</span></Link>
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
                    {/* <Link className="fas fa-search text-decoration-none text-light fs-5 me-4"></Link> */}
                    <Link to="/search"><Form.Control onChange={(e) => props.buscar(e.target.value)}  /></Link>
                    <span className="fas fa-bell text-decoration-none text-light fs-5 me-4"></span>
                    <span className={"nav-profile-icon me-5 " + profile.bg}></span>
                </div>
            </Container>
        </Navbar>        
        : ''
    )
}

export default NavBar