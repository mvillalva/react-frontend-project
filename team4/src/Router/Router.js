import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '../pages/profiles/Profiles.css'
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";
import ProfileAdd from "../components/profile-pack/profile-add/ProfileAdd";
import ProfileEdit from "../components/profile-pack/profile-edit/ProfileEdit";
import ProfileDelete from "../components/profile-pack/profile-delete/ProfileDelete";

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
                <Route path="/AddProfile" element={<ProfileAdd profiles={props.profiles} />}></Route>
                <Route path="/EditProfile/:id" element={<ProfileEdit profiles={props.profiles} />}></Route>
                <Route path="/DeleteProfile/:id" element={<ProfileDelete profiles={props.profiles} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
