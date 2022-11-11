import React from "react";
import "./NotFound.css";
import logo from '../../img/netflix-icon.svg'
import { Link } from "react-router-dom";

const NotFound = () => {    
    return (
        <div className="nf-container">
            <div className="nf-header d-flex">
                <img src={logo} alt="logo" className="logo"></img>
            </div>
            <div className="nf-bg nf-content">
                <h1 className="nf-title">¿Te perdiste?</h1>
                <div className="nf-body">
                    <h2 className="nf-subtitle">No encontramos esa página. Encontrarás muchos títulos para explorar en la página de inicio.</h2>
                    <Link to='/' className="nf-button">Inicio de Netflix</Link>
                    <div className="nt-coderror">
                        <p>Código de error <strong>NSES-404</strong></p>
                    </div>
                </div>
            </div>
            <span className="nf-footer">
                DE <strong>PERDIDOS EN EL ESPACIO</strong>
            </span>
        </div>
    );
};

export default NotFound;
