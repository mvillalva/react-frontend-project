import React from 'react';
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

const Router = (props) => { 
    const Principal = () => props.profiles.length === 2 ? 
                            <Navigate to='/home' /> :
                            (props.profiles.lenght === 0 ?
                                <div className="preloader"></div> :
                                <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />)
    
    const location = window.location.href.split('/').join('%2')
    const isLoggedIn = props.loggedUser || localStorage.getItem('login') ? true : false

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
                <Route path="/profiles" element={isLoggedIn? <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' /> : <Navigate to='/start' /> }></Route>
                <Route path="/home" element={isLoggedIn? <Home /> : <Navigate to='/' />}></Route>
                <Route path="/ManageProfiles" element={isLoggedIn? <Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' /> : <Navigate to='/start' /> }></Route>
                <Route path="/AddProfile" element={isLoggedIn? <ProfileAdd profiles={props.profiles} /> : <Navigate to='/start' /> }></Route>
                <Route path="/EditProfile/:id" element={isLoggedIn? <ProfileEdit profiles={props.profiles} /> : <Navigate to='/start' /> }></Route>
                <Route path="/DeleteProfile/:id" element={isLoggedIn? <ProfileDelete profiles={props.profiles} /> : <Navigate to='/start' /> }></Route>
                <Route path="/search" element={isLoggedIn? <Search resultados={props.titulos}/> : <Navigate to='/start' />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<Navigate to={'/notfound?'+location} />}></Route>
                <Route path="/ProfileAvatars" element={isLoggedIn? <Avatars /> : <Navigate to='/start' />} ></Route>
                <Route path="/slider" element={isLoggedIn? <Slider movies={props.movies} /> : <Navigate to='/start' /> }></Route>
                <Route path="/test" element={isLoggedIn? <Navigate to='/start' /> : <Logueo />}></Route>
            </Routes>

        </BrowserRouter>
    );
};


export default Router;
