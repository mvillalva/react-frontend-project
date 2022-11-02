import React from 'react';
import './LoginPage.css';
import ButtonLogIn from './ButtonLogIn';
import Form from 'react-bootstrap/Form';

function LoginPage() {

    return (
<>
    <div className="LoginPage">

        <h1 className="loginPage-title"> Login to Netflix </h1>

            <form>
                <p>Inicia sesión</p>

                <input type ="text" name="username"></input>

                <input type="password" name="password"/>
                <ButtonLogIn></ButtonLogIn>
                    
                <Form.Check aria-label="option 1"  label="Recuérdame" />
                <p>¿Necesitas ayuda?</p>
            </form>

    </div>
</>
);

}
export default LoginPage;