import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/netflix-icon.svg'
import './FrontPage.css'
import LanguageSelect from "../../components/languageSelect/LanguageSelect";
import RegistrationEmail from "../../components/registrationEmail/RegistrationEmail";
import { languajes } from "../../languages";
import { getCurrentLanguage } from "../../functions/general";

const FrontPage = () => {
    const current_language = getCurrentLanguage()
    const lang = languajes[current_language]

    useEffect(() => {
        document.title = lang.FRONT_PAGE_TITLE
    })

    return (
        <>  
            <div className="logo-login-container text-start ps-5 pt-4">
                <img src={logo} alt="logo" className="logo-login" />
            </div>
            <div className="language-container">
                <LanguageSelect />
            </div>
            <Link to="/login" className="button-login">{lang.FRONT_BUTTON_LOGIN}</Link>
            <div className="login-container">
                <h1 className="login-title">{lang.FRONT_TITLE}</h1>
                <h2 className="login-subtitle">{lang.FRONT_SUBTITLE}</h2>
                <div className="mt-4">
                    <h3 className="login-subtitle2 mb-4">{lang.FRONT_REGISTER}</h3>
                    <RegistrationEmail />
                </div>
            </div>
        </>
    );
};

export default FrontPage;
