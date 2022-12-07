import React from "react";
import './LoginPage.css';
import Login from "../../components/login/Login";
import logo from '../../img/netflix-icon.svg'

const LoginPage = () =>{
    return (
        <>
            <div className="logo-login-container text-start ps-5 pt-4">
                <img src={logo} alt="logo" className="logo-login" />
            </div>
            <div className="flex-container LoginContainer"> 
                <Login></Login>
            </div>
        </>
    )
}

export default LoginPage;