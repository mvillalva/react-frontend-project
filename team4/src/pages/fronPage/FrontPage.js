import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/netflix-icon.svg'
import './FrontPage.css'
import LanguageSelect from "../../components/languageSelect/LanguageSelect";
import RegistrationEmail from "../../components/registrationEmail/RegistrationEmail";
import { LANGUAGES } from "../../languages";
import { MainContext } from "../../context/MainContext";

const FrontPage = () => {
    const {language} = useContext(MainContext)
    const lang = LANGUAGES[language]

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
