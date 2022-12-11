import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '../pages/profiles/Profiles.css'
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";
import ProfileAdd from "../components/profile-pack/profile-add/ProfileAdd";
import ProfileEdit from "../components/profile-pack/profile-edit/ProfileEdit";
import ProfileDelete from "../components/profile-pack/profile-delete/ProfileDelete";
import LoginPage from "../pages/loginPage/LoginPage";
import LoginHelp from "../components/login/LoginHelp";
import VideoDescriptionPage from "../pages/videoDescriptionPage/VideoDescriptionPage";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import Search from "../pages/Search/Search";
import Avatars from '../components/profile-pack/avatars/Avatars';
import FrontPage from '../pages/fronPage/FrontPage';
import NotFound from '../pages/404/NotFound';
import Slider from "../components/slider/Slider.jsx";
import Logueo from '../pages/loginPage/TestLogueo';
import { MainContext } from '../context/MainContext';
import Loader from '../components/loader/Loader';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import Series from '../pages/Series/Series';
import Movies from '../pages/Movies/Movies';
import Footer from '../components/footer/Footer';

const Router = (props) => {     
    const {profiles} = useContext(MainContext)

    const Principal = () => props.profilesLoaded ?
                            (   
                                profiles.length === 2 ?
                                <Navigate to='/home' /> :
                                <Profiles title="¿Quién está viendo ahora?" profiles={profiles} action='R' />
                            )
                            :   <Loader />
    
    const location = window.location.href.split('/').join('%2')
    const isLoggedIn = props.loggedUser || localStorage.getItem('login') ? true : false
    
    /**
     * 
     * @param {*} logged - Objeto que se carga si esta logueado
     * @param {*} not_logged - Objeto que se carga si NO esta logueado
     * @returns - Si no esta logueado muestra [not_logged], si esta logueado pero no se cargaron los perfiles muestra el "loader", si no muestra el objeto [logged]
     */
    const loadPage = (logged, not_logged) => {
        let obj = null

        if (isLoggedIn) {
            obj = <Loader />
            
            if (props.profilesLoaded) {
                obj = logged
            }
        } else {
            obj = not_logged
        }

        return obj
    }
    
    return (
        <BrowserRouter>
            {props.children}
            
            <Routes>
                <Route path="/" element={isLoggedIn? <Navigate to='/start' /> : <FrontPage />}></Route>
                <Route path="/start" element={isLoggedIn? <Principal /> : <Navigate to='/' />}></Route>
                <Route path="/login" element={isLoggedIn? <Navigate to='/start' /> : <LoginPage />}></Route>
                <Route path="/LoginHelp" element={isLoggedIn? <Navigate to='/start' /> : <LoginHelp />}></Route>
                <Route path="/VideoDescriptionPage" element={isLoggedIn? <VideoDescriptionPage title="Manifiesto" /> : <Navigate to='/' />}></Route>
                <Route path="/Playlist" element={isLoggedIn? <PlaylistPage title="Playlist" /> : <Navigate to='/start' /> }></Route>
                <Route path="/profiles" element={loadPage(<Profiles title="¿Quién está viendo ahora?" action='R' /> , <Navigate to='/start' />) }></Route>
                <Route path="/home" element={loadPage(<Home /> , <Navigate to='/' />)}></Route>
                <Route path="/series" element={loadPage(<Series /> , <Navigate to='/start' />)}></Route>
                <Route path="/movies" element={loadPage(<Movies /> , <Navigate to='/start' />)}></Route>
                <Route path="/ManageProfiles" element={loadPage(<Profiles title="Administrar perfiles:" action='U' /> , <Navigate to='/start' />) }></Route>
                <Route path="/AddProfile" element={isLoggedIn? <ProfileAdd /> : <Navigate to='/start' /> }></Route>
                <Route path="/EditProfile/:id" element={isLoggedIn? <ProfileEdit /> : <Navigate to='/start' /> }></Route>
                <Route path="/DeleteProfile/:id" element={isLoggedIn? <ProfileDelete /> : <Navigate to='/start' /> }></Route>
                <Route path="/search" element={isLoggedIn? <Search resultados={props.titulos}/> : <Navigate to='/start' />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<Navigate to={'/notfound?'+location} />}></Route>
                <Route path="/ProfileAvatars" element={isLoggedIn? <Avatars /> : <Navigate to='/start' />} ></Route>
                <Route path="/slider" element={isLoggedIn? <Slider movies={props.movies} /> : <Navigate to='/start' /> }></Route>
                <Route path="/test" element={isLoggedIn? <Navigate to='/start' /> : <Logueo />}></Route>
                <Route path="/registration/:email" element={isLoggedIn? <Navigate to='/start' /> : <RegistrationPage /> } />
            </Routes>

            <Footer></Footer>

        </BrowserRouter>
    );
};


export default Router;
