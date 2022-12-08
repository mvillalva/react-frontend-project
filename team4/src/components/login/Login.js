import React from "react";
import "./Login.css";
import ButtonLogIn from "./ButtonLogIn";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseApp } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { logInWithEmail } from "../../functions/firebaseActions";

function Login() {

    
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    const user = signInWithEmailAndPassword(auth, email, password)
    
    };

const [user, setUser] = useState({
    email:"",
    password:"",

});

const handleChange = ({target:{name,value}})=>{
    setUser({...user,[name]: value})

};


  return (
    <div className="flex-container LoginContainer">
      <div className="Login">
        <h1 className="loginPage-title"> Login to Netflix </h1>

        <form onSubmit={handleSubmit}>
          <h1>Inicia sesión</h1>

          <div className="InpUserName">
            <input
              type="text"
              name="username"
              placeholder="Email o número de teléfono"
              onChange={handleChange}
            />
          </div>

          <div className="inpPassword">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
          </div>
          <div>
            <ButtonLogIn></ButtonLogIn>
          </div>
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
