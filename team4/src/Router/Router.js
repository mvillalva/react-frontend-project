import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '../pages/profiles/Profiles.css'
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";
import ProfileAdd from "../components/profile-pack/profile-add/ProfileAdd";

const Router = (props) => {    

    const Principal = () => props.profiles.length === 2 ? 
                            <Navigate to='/browse' /> :
                            <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}></Route>
                <Route path="/profiles" element={<Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />}></Route>
                <Route path="/browse" element={<Home />}></Route>
                <Route path="/ManageProfiles" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
                <Route path="/AddProfile" element={<ProfileAdd />}></Route>
                <Route path="/EditProfile" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
                <Route path="/DeleteProfile" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
