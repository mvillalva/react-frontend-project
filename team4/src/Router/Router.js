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
// import Slider from "../components/slider/Slider";

const Router = (props) => {    

    const Principal = () => props.profiles.length === 2 ? 
                            <Navigate to='/browse' /> :
                            (props.profiles.lenght === 0 ?
                                <div className="preloader"></div> :
                                <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />)
                            
    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path="/" element={<Principal />}></Route>
                <Route path="/loginpage" element={<LoginPage />}></Route>
                <Route path="/LoginHelp" element={<LoginHelp />}></Route>
                <Route path="/VideoDescriptionPage" element={<VideoDescriptionPage title="Manifiesto" />}></Route>
                <Route path="/profiles" element={<Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/ManageProfiles" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
                <Route path="/AddProfile" element={<ProfileAdd profiles={props.profiles} />}></Route>
                <Route path="/EditProfile/:id" element={<ProfileEdit profiles={props.profiles} />}></Route>
                <Route path="/DeleteProfile/:id" element={<ProfileDelete profiles={props.profiles} />}></Route>
                {/* <Route path="/slider" element={<Slider />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
