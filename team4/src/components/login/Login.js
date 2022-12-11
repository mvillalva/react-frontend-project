import React from "react";
import "./Login.css";
import ButtonLogIn from "./ButtonLogIn";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseApp } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
import { Button } from "react-bootstrap";
import {googleSingIn} from "../../functions/firebaseActions"


function Login() {
    


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
    const user = signInWithEmailAndPassword(auth, email, password)
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
    <div className="flex-container LoginContainer">
      <div className="Login">
        <h1 className="loginPage-title"> Login to Netflix </h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <h1>Inicia sesión</h1>

          <div className="InpUserName">
            <input
             style={ {width: "250px" }}
              type="text"
              name="email"
              placeholder="Email o número de teléfono"
              onChange={handleChange}
            />
          </div>
          <br/>
          <div className="inpPassword">
            <input style={ {width: "250px" }}
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>
          <br/>
          <div>
            <ButtonLogIn></ButtonLogIn>
          </div>
          <br></br>
          <Button
          variant="primary"
          type="submit"
          style={{ width: "250px" }}
          onClick={() => googleSingIn()}
        >
          Iniciar con Google
        </Button>
        <br/><br/>
          <div className="checkBoxLogin">
            <Form.Check aria-label="option 1" label="Recuérdame" />
            <Link to="/LoginHelp">¿Necesitas ayuda?</Link>
          </div>
          
        </form>

       

        <div className="login-signup-now" data-uia="login-signup-now">
          ¿Primera vez en Netflix?
          <p>
            <b>Suscríbete ahora</b>
          </p>
        </div>
        <span className="derechos">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          solo eres un robot.
        </span>
      </div>
      
    </div>
  );
}
export default Login;
