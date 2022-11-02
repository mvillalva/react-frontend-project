import React from 'react';
import './Login.css';
import ButtonLogIn from './ButtonLogIn';
import Form from 'react-bootstrap/Form';

function Login() {

    return (
<>
    <div className="Login">

        <h1 className="loginPage-title"> Login to Netflix </h1>

            <form method='post'>
                <h1>Inicia sesión</h1>

                <input type ="text" name="username" placeholder='Email o número de teléfono'></input>

                <input type="password" name="password" placeholder='Contraseña'/>
                <ButtonLogIn></ButtonLogIn>
                    
                <Form.Check aria-label="option 1"  label="Recuérdame" />
                <a  target="_self" data-uia="login-help-link" href="/LoginHelp">¿Necesitas ayuda?</a>
            </form>
            <div class="login-signup-now" data-uia="login-signup-now">¿Primera vez en Netflix? 
            <a class="" target="_self" href="/">Suscríbete ahora</a>
            </div>

    </div>
</>
);

}
export default Login;