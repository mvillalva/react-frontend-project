import React, { useContext, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import { checkUser } from "../../functions/firebaseActions";
import { VerifyEmail } from "../../functions/general";
import { languajes } from "../../languages";
import "./RegistrationEmail.css";

const RegistrationEmail = () => {
    const { state } = useContext(MainContext);
    const [validEmail, setValidEmail] = useState(true)
    const navigate = useNavigate();
    const lang = languajes[state.current_language];    
    
    const GoToRegistration = async (e) => {
        e.preventDefault();

        const email = document.getElementsByName("email")[0].value;

        if (VerifyEmail(email)) {
            if (await checkUser(email)) {
                navigate("/login");
            } else {
                navigate("/registration/" + email)
            }
        } else {
            setValidEmail(false)
        }
    };

    return (
        <Form.Group className="mb-3 text-secondary d-flex justify-content-center align-items-center flex-column flex-lg-row">
            <FloatingLabel controlId="emailId" label={lang.FRONT_INPUT_TEXT}>
                <Form.Control type="text" placeholder={lang.FRONT_INPUT_TEXT} className="email-input" name="email" required isInvalid={!validEmail} />
                <Form.Control.Feedback type="invalid" className="invalid">
                    {lang.FRONT_EMAIL_VERIFY}
                </Form.Control.Feedback>
            </FloatingLabel>
            <a href="/registration" className="button-start" onClick={(e) => {GoToRegistration(e)}}>
                {lang.FRONT_BUTTON_REGISTER} <span className="fas fa-chevron-right ps-2 f-icon" />
            </a>
        </Form.Group>
    );
};

export default RegistrationEmail;
