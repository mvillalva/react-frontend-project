import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/netflix-icon.svg'
import './FrontPage.css'
import LanguageSelect from "../../components/languageSelect/LanguageSelect";
import RegistrationEmail from "../../components/registrationEmail/RegistrationEmail";

const FrontPage = () => {
    useEffect(() => {
        document.title = "Team4: Ve series online, ve películas online "
    })

    return (
        <>  
            <div className="logo-login-container text-start ps-5 pt-4">
                <img src={logo} alt="logo" className="logo-login" />
            </div>
            <div className="language-container">
                <LanguageSelect />
            </div>
            <Link to="/login" className="button-login">Iniciar sesión</Link>
            <div className="login-container">
                <h1 className="login-title">Películas y series ilimitadas y mucho más</h1>
                <h2 className="login-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
                <div className="mt-4">
                    <h3 className="login-subtitle2 mb-4">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
                    <RegistrationEmail />
                </div>
            </div>
        </>
    );
};

export default FrontPage;
