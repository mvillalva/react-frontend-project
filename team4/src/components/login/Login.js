import React, { useState } from "react";
import "./Login.css";
import ButtonLogIn from "./ButtonLogIn";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { logInWithEmail } from "../../functions/firebaseActions";

function Login() {
    const inputs_default = {
        username: "",
        password: "",
    };

    const [inputs, setInputs] = useState(inputs_default);

    const login = async (e) => {
        e.preventDefault();
        const error = await logInWithEmail(inputs.username, inputs.password);

        if (error) {
            alert(error);
        }
    };

    const changeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        inputs[name] = value;
        setInputs(inputs);
    };

    return (
        <div className="flex-container LoginContainer">
            <div className="Login">
                <h1 className="loginPage-title"> Login to Netflix </h1>

                <form onSubmit={(event) => login(event)}>
                    <h1>Inicia sesión</h1>

                    <div className="InpUserName mb-5">
                        <input
                            className="w-100 fs-6"
                            type="text"
                            name="username"
                            placeholder="Email o número de teléfono"
                            onChange={(e) => { changeInput(e) }}
                        />
                    </div>

                    <div className="inpPassword mb-5">
                        <input
                            className="w-100 fs-6"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={(e) => { changeInput(e) }}
                        />
                    </div>
                    <div>
                        <ButtonLogIn></ButtonLogIn>
                    </div>
                    <div className="checkBoxLogin mb-5">
                        <Form.Check aria-label="option 1" label="Recuérdame" id="checkID" />
                        <Link to="/LoginHelp" className="text-decoration-none text-light">¿Necesitas ayuda?</Link>
                    </div>
                </form>
                <div className="login-signup-now mb-3 text-left " data-uia="login-signup-now">
                ¿Primera vez en Netflix? <a href="/loginghelp" className="fw-bold text-decoration-none text-light">Suscríbete ahora</a>.
                </div>
                <span className="derechos">Esta página está protegida por Google reCAPTCHA para comprobar que no solo eres un robot.</span>
            </div>
        </div>
    );
}

export default Login;
