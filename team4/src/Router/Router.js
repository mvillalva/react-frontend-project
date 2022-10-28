import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";

const Router = (props) => {    

    const Prof = () =>  props.profiles.length === 2 ? 
                        <Navigate to='/browse' /> :
                        <Profiles title="¿Quién está viendo ahora?" profiles={props.profiles}></Profiles>
    
    return (
        <>            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Prof />}></Route>
                    <Route path="/browse" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
