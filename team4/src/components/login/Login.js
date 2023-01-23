import React, { useContext } from "react";
import "./Login.css";
import ButtonLogIn from "./ButtonLogIn";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseApp } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
import ButtonGoogle from "./ButtonGoogle";
import { MainContext } from "../../context/MainContext";
import { LANGUAGES } from "../../languages";
import { FloatingLabel } from "react-bootstrap";


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
        <form onSubmit={handleSubmit}>
            <h2 className="text-left mb-4">{LANGUAGES[language].LOGIN_START}</h2>
            <Form.Group className="mb-3 text-secondary">
                <FloatingLabel controlId="emailId" label={LANGUAGES[language].LOGIN_EMAIL}>
                    <Form.Control name="email" type="text" placeholder={LANGUAGES[language].LOGIN_EMAIL} className="w-100 fs-6" required onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">
                        Ingresa un email o un número de teléfono válido.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-5 text-secondary">
                <FloatingLabel controlId="passId" label={LANGUAGES[language].LOGIN_PASSWORD}>
                    <Form.Control name="password" type="password" placeholder={LANGUAGES[language].LOGIN_PASSWORD} className="w-100 fs-6" required onChange={handleChange} />
                    <Form.Control.Feedback type="invalid">
                        La contraseña debe tener entre 4 y 60 caracteres.
                    </Form.Control.Feedback>
                </FloatingLabel>
            </Form.Group>
                        
            <ButtonLogIn></ButtonLogIn>
            <ButtonGoogle />

            <div className="checkBoxLogin d-flex justify-content-between small mb-2">
                <Form.Check aria-label="option 1" label={LANGUAGES[language].LOGIN_REMEMBER} id='check' className="position-relative" />
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
