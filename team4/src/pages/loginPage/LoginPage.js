import React from "react";
import './LoginPage.css';
import Login from "../../components/login/Login";
import logo from '../../img/netflix-icon.svg'
import { Link } from "react-router-dom";

const LoginPage = () =>{
    return (
        <>
            <div className="logo-login-container text-start ps-5 pt-4">
                <Link to="/" className="d-block"><img src={logo} alt="logo" className="logo-login" /></Link>
            </div>
            <div className="flex-container LoginContainer"> 
                <Login></Login>
            </div>
        </>
    )
}

export default LoginPage;