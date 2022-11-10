import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Avatars.css";

const Avatars = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const state = location.state

    const selectedAvatar = (bg) => {
        state.bg = bg
        navigate(state.page, {state: state})
    }

    return (
        <div className="avatars-container">            
            <div className="centered-div animate-container">
                <div className="avatars-header">
                    <div className="header-container">
                        <Link onClick={()=> {navigate(-1)}}><span className="fas fa-arrow-left text-decoration-none text-light fs-1"></span></Link>
                        <div className="header-description">
                            <h1 className="header-text">Avatar del perfil</h1>
                            <h2 className="sub-header-text">Elige un ícono para el perfil.</h2>
                        </div>
                    </div>                    
                </div>
                <div className="d-flex justify-content-around align-items-center vh-100">
                    <div className="avatars-icon bg-1 me-3" onClick={()=>{selectedAvatar('bg-1')}}></div>
                    <div className="avatars-icon bg-2 me-3" onClick={()=>{selectedAvatar('bg-2')}}></div>
                    <div className="avatars-icon bg-3 me-3" onClick={()=>{selectedAvatar('bg-3')}}></div>
                    <div className="avatars-icon bg-4 me-3" onClick={()=>{selectedAvatar('bg-4')}}></div>
                    <div className="avatars-icon bg-5 me-3" onClick={()=>{selectedAvatar('bg-5')}}></div>
                </div>
            </div>
        </div>
    );
};

export default Avatars;
