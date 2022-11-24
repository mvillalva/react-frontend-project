import React from 'react';
import './Login.css';
import ButtonLogIn from './ButtonLogIn';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
// import { firebaseApp } from '../../firebase/firebaseConfig';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {logInWithEmail} from '../../functions/firebaseActions'


function Login() {


    // function placeHolderFunction ( event) {
    //     event.preventDefault(); // evitar la propagacion del evento..
    //     const email = 'team4@test.com';
    //     const password = '123456';
    //     const auth = getAuth(firebaseApp);
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((credentials) => {
    //         // Si llegamos aca... es porque se logeo..
    //         const firebase_user = credentials.user;
    //         console.log(firebase_user);
    //     })
    //     .catch( (error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     } );

    //     console.log("placeholder");
    // }

    return (

    <div className="flex-container LoginContainer">
        <div className='Login'>
         <h1 className="loginPage-title"> Login to Netflix </h1>

            <form onSubmit={ (event) => logInWithEmail(event )}>
                <h1>Inicia sesión</h1>

                <div className='InpUserName'>
                    <input type ="text" 
                     name="username" 
                     placeholder='Email o número de teléfono'
                     onChange={logInWithEmail()}/>
                    
                </div>

                <div className='inpPassword'>
                  <input type="password" 
                    name="password" 
                     placeholder='Contraseña'
                     onChange={logInWithEmail() }/>
                     
                </div>
                <div>
                    <ButtonLogIn></ButtonLogIn>   
                </div >
                <div className='checkBoxLogin'>
                    <Form.Check aria-label="option 1"  label="Recuérdame" />
                    <Link to= "/LoginHelp" >¿Necesitas ayuda?</Link>
                </div>
                    
                
            </form>
            <div className="login-signup-now" data-uia="login-signup-now">¿Primera vez en Netflix? 
            <p><b>Suscríbete ahora</b></p>
            </div>
            <span className='derechos'>Esta página está protegida por Google reCAPTCHA para comprobar que no solo eres un robot.</span>
        </div>
    </div>

);

}
export default Login;