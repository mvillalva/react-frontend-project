import React, { useContext } from "react";
import "./MediaTypeLabel.css";
import logo from "../../img/nf.ico";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";

const MediaTypeLabel = ({ media_type }) => {
    const {language} = useContext(MainContext)

    const label = media_type === 'movie' ? LANGUAGES[language].FILM : LANGUAGES[language].SERIES
    return (
        <div className="d-flex justify-content-start align-items-center mb-2">
            <img className="media-logo-size" src={logo} alt='logo' />
            <div className="media-label">{label}</div>
        </div>
    );
};

export default MediaTypeLabel;
