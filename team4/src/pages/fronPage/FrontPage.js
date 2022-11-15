import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/netflix-icon.svg'
import './FrontPage.css'

const FrontPage = () => {
    console.log(navigator)
    console.log(navigator.language)

    return (
        <>            
            <div className="logo-login-container text-start ps-5 pt-4">
                <img src={logo} alt="logo" className="logo-login" />
            </div>
            <Link to="/login" className="button-login">Iniciar sesión</Link>
            <div className="login-container">
                <h1 className="login-title">Películas y series ilimitadas y mucho más</h1>
                <h2 className="login-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
            </div>
        </>
    );
};

export default FrontPage;
