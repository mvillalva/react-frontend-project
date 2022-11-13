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
                <div className="avatars-icon-container">
                    <div className="avatars-icon bg-1 me-3 mb-3" onClick={()=>{selectedAvatar('bg-1')}}></div>
                    <div className="avatars-icon bg-2 me-3 mb-3" onClick={()=>{selectedAvatar('bg-2')}}></div>
                    <div className="avatars-icon bg-3 me-3 mb-3" onClick={()=>{selectedAvatar('bg-3')}}></div>
                    <div className="avatars-icon bg-4 me-3 mb-3" onClick={()=>{selectedAvatar('bg-4')}}></div>
                    <div className="avatars-icon bg-5 me-3 mb-3" onClick={()=>{selectedAvatar('bg-5')}}></div>
                    <div className="avatars-icon bg-18 me-3 mb-3" onClick={()=>{selectedAvatar('bg-18')}}></div>
                    <div className="avatars-icon bg-19 me-3 mb-3" onClick={()=>{selectedAvatar('bg-19')}}></div>
                    <div className="avatars-icon bg-20 me-3 mb-3" onClick={()=>{selectedAvatar('bg-20')}}></div>
                    <div className="avatars-icon bg-21 me-3 mb-3" onClick={()=>{selectedAvatar('bg-21')}}></div>
                    <div className="avatars-icon bg-6 me-3 mb-3" onClick={()=>{selectedAvatar('bg-6')}}></div>
                    <div className="avatars-icon bg-7 me-3 mb-3" onClick={()=>{selectedAvatar('bg-7')}}></div>
                    <div className="avatars-icon bg-8 me-3 mb-3" onClick={()=>{selectedAvatar('bg-8')}}></div>
                    <div className="avatars-icon bg-17 me-3 mb-3" onClick={()=>{selectedAvatar('bg-17')}}></div>
                    <div className="avatars-icon bg-9 me-3 mb-3" onClick={()=>{selectedAvatar('bg-9')}}></div>
                    <div className="avatars-icon bg-10 me-3 mb-3" onClick={()=>{selectedAvatar('bg-10')}}></div>
                    <div className="avatars-icon bg-11 me-3 mb-3" onClick={()=>{selectedAvatar('bg-11')}}></div>
                    <div className="avatars-icon bg-12 me-3 mb-3" onClick={()=>{selectedAvatar('bg-12')}}></div>
                    <div className="avatars-icon bg-13 me-3 mb-3" onClick={()=>{selectedAvatar('bg-13')}}></div>
                    <div className="avatars-icon bg-14 me-3 mb-3" onClick={()=>{selectedAvatar('bg-14')}}></div>
                    <div className="avatars-icon bg-15 me-3 mb-3" onClick={()=>{selectedAvatar('bg-15')}}></div>
                    <div className="avatars-icon bg-16 me-3 mb-3" onClick={()=>{selectedAvatar('bg-16')}}></div>
                </div>
            </div>
        </div>
    );
};

export default Avatars;
