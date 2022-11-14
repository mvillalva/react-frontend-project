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

const Router = (props) => { 
    const Principal = () => props.profiles.length === 2 ? 
                            <Navigate to='/home' /> :
                            (props.profiles.lenght === 0 ?
                                <div className="preloader"></div> :
                                <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />)
    
    const location = window.location.href.split('/').join('%2')

    return (
        <BrowserRouter>
            {props.children}
            
            <Routes>
                <Route path="/" element={<FrontPage />}></Route>
                <Route path="/start" element={<Principal />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/LoginHelp" element={<LoginHelp />}></Route>
                <Route path="/VideoDescriptionPage" element={<VideoDescriptionPage title="Manifiesto" />}></Route>
                <Route path="/Playlist" element={<PlaylistPage title="Playlist" />}></Route>
                <Route path="/profiles" element={<Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/ManageProfiles" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
                <Route path="/AddProfile" element={<ProfileAdd profiles={props.profiles} />}></Route>
                <Route path="/EditProfile/:id" element={<ProfileEdit profiles={props.profiles} />}></Route>
                <Route path="/DeleteProfile/:id" element={<ProfileDelete profiles={props.profiles} />}></Route>
                <Route path="/search" element={<Search resultados={props.titulos}/>}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<Navigate to={'/notfound?'+location} />}></Route>
                <Route path="/ProfileAvatars" element={<Avatars />}></Route>
                <Route path="/slider" element={<Slider movies={props.movies} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};


export default Router;
