import React, { useContext } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import './NavBar.css'
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../../img/netflix-icon.svg'
import SearchMovie from '../searchMovie/SearchMovie'
import Notification from '../notification/Notification'
import AccountMenu from '../accountMenu/AccountMenu'
import Profile from '../profile-pack/profile/Profile'
import { closeSession, TYPE } from "../../functions/general";
import { MainContext } from '../../context/MainContext'
import { LANGUAGES } from '../../languages'

const NavBar = (props) => {
    const thisLocation = useLocation();
    const {profiles, currentProfile, language, changeState} = useContext(MainContext)

    let filter = props.filter.find(e => matchPath({ path: e }, thisLocation.pathname))    
    
    const getProfiles = () => {        
        return (
            profiles
            .filter(e => e.type !== 'UserAdd' && e.name !== currentProfile.name)
            .map(e => <Profile profile={e} action='M' key={e.name} class="small-icon"></Profile>)
        )
    }

    if (profiles.length === 2) {
        changeState(TYPE.currentProfile, profiles[1])
    }
        
    return ( 
        !filter && thisLocation.pathname !== '/'?
        <Navbar bg={props.isScrolled ? 'dark' : 'transparent'} variant='dark' expand='md' fixed="top" className="nav-animate-container nav-bg-transparent pt-2" >
            <Container fluid>                
                <Navbar.Brand href="/home" className="ms-5"><img className='navbar-logo' src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">                    
                        <li className="nav-item me-2">
                            <Link className="nav-link active" to="/home" >{LANGUAGES[language].HOME} <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/series">{LANGUAGES[language].TV_SHOWS}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">{LANGUAGES[language].MOVIES}</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="#">{LANGUAGES[language].NEW_POPULAR}</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/Playlist">{LANGUAGES[language].MY_LIST}</Link>
                        </li>
                    </Nav>                    
                </Navbar.Collapse>
                <div className="navbar-menu-container mt-2 mt-lg-0">
                    <SearchMovie  buscar={props.buscar} />
                    <Notification></Notification>
                    <AccountMenu>
                        <ul className="ul">
                            {getProfiles()} 
                            <li>
                                <span className="me-3 fas fa-pencil"></span>
                                <Link className="text-decoration-none text-light" to="/ManageProfiles">{LANGUAGES[language].MANAGE_PROFILES}</Link>
                            </li>
                        </ul>
                        <hr />
                        <Link className="text-decoration-none text-light" to='#' onClick={(e) => closeSession(e) }>{LANGUAGES[language].LOGOUT}</Link>
                    </AccountMenu>                    
                </div>
            </Container>
        </Navbar>        
        : ''
    )
}

export default NavBar