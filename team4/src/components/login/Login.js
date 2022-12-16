import React, { useContext } from "react";
import "./Login.css";
import ButtonLogIn from "./ButtonLogIn";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseApp } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
// import { Button } from "react-bootstrap";
// import {googleSingIn} from "../../functions/firebaseActions"
import ButtonGoogle from "./ButtonGoogle";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";


function Login() {
  const {language} = useContext(MainContext)

  const [userR, setUser] = useState({      
    email:"",
    password:"",

  });

  const handleChange = ({target:{name,value}})=>{
          setUser({...userR,[name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const auth = getAuth(firebaseApp);
    const email= userR.email;
    const password= userR.password;    
    signInWithEmailAndPassword(auth, email, password)
    .then((Credentials) =>{
        const firebase_user =Credentials.user;
        console.log(firebase_user);
    })
    .catch((error) =>{
        const errorCode = error.code;
        console.log (errorCode);
    });


    };
  return (
    <div className="Login">
      <h1 className="loginPage-title"> {LANGUAGES[language].LOGIN_TITLE} </h1>      
      <form onSubmit={handleSubmit}>
        <h1>{LANGUAGES[language].LOGIN_START}</h1>

        <div className="InpUserName mb-2">
          <input
            style={ {width: "100%", height: "45px" }}
            type="text"
            name="email"
            placeholder={LANGUAGES[language].LOGIN_EMAIL}
            onChange={handleChange}
          />
        </div>
        
        <div className="inpPassword mb-2">
          <input style={ {width: "100%", height: "45px" }}
            type="password"
            name="password"
            placeholder={LANGUAGES[language].LOGIN_PASSWORD}
            onChange={handleChange}
          />
        </div>          
        
        <ButtonLogIn></ButtonLogIn>
        <ButtonGoogle />

        <div className="checkBoxLogin d-flex justify-content-between small mb-2">
          <Form.Check aria-label="option 1" label={LANGUAGES[language].LOGIN_REMEMBER} id='check' />
          <Link to="/LoginHelp" className="text-decoration-none text-secondary">{LANGUAGES[language].LOGIN_HELP}</Link>
        </div>        
      </form>

      <div className="login-signup-now text-left mb-3">
      {LANGUAGES[language].LOGIN_NEW}
        <Link to="/" className="text-decoration-none text-light"> {LANGUAGES[language].LOGIN_SUBSCRIBE}</Link>.
      </div>
      <span className="derechos">
      {LANGUAGES[language].LOGIN_PROTECT_TEXT}
      </span>
    </div>
  );
}
export default Login;
