import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";

const Router = (props) => {    

    const Principal = ({title, profiles, action}) =>    profiles.length === 2 ? 
                                                        <Navigate to='/browse' /> :
                                                        <Profiles title={title} profiles={profiles} action={action} />
    
    return (
        <>            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Principal title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />}></Route>
                    <Route path="/profiles" element={<Profiles title="¿Quién está viendo ahora?" profiles={props.profiles} action='R' />}></Route>
                    <Route path="/browse" element={<Home />}></Route>
                    <Route path="/ManageProfiles" element={<Profiles title="Administrar perfiles:" profiles={props.profiles} action='U' />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
