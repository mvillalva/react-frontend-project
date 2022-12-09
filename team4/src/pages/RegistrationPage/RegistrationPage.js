import React, { useState } from "react";
import "./RegistrationPage.css";
import logo from "../../img/netflix-icon.svg";
import { Link, useParams } from "react-router-dom";
import { languajes } from "../../languages";
import { getCurrentLanguage, VerifyEmail } from "../../functions/general";
import { Form, FloatingLabel, Modal } from "react-bootstrap";
import ButtonLogIn from "../../components/login/ButtonLogIn";
import { checkUser, createUserWithEmail, logInWithEmail } from "../../functions/firebaseActions";
import ButtonGoogle from "../../components/login/ButtonGoogle";

const RegistrationPage = () => {
    const params = useParams()
    const [show, setShow] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPass, setValidPass] = useState(true);    
    const current_language = getCurrentLanguage();
    const lang = languajes[current_language];
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const inputs_default = {
        email: params.email,
        password: ""
    }

    const [inputs, setInputs] = useState(inputs_default)

    const login = async (e) => {
        e.preventDefault()

        let error = ''

        if (!VerifyEmail(inputs.email)) {
            setValidEmail(false)
        } else {
            const existsUser = await checkUser(inputs.email)
    
            if (!existsUser) {
                await createUserWithEmail(inputs.email, inputs.password);
    
                error = await logInWithEmail(inputs.email, inputs.password)
            } else {
                error = 'El email ya está registrado, por favor, inicie sesión'
            }
    
            if (error) {
                setErrMsg(error)        
                handleShow()        
            }
        }

    }

    const changeInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        
        inputs[name] = value
        setInputs(inputs)

        if(name === 'password') {            
            setValidPass(value.length >= 6 && value.length <= 60)
        }
    }

    return (
        <div className="bg-light vh-100">
            <div className="reg-header">
                <a href="/">
                    <img src={logo} alt="logo" className="reg-logo" />
                </a>
                <Link to="/login" className="reg-button-login">
                    {lang.FRONT_BUTTON_LOGIN}
                </Link>
            </div>
            <div className="reg-line"></div>
            <div className="reg-container">
                <div className="reg-inner-continer">
                    <h2 className="text-dark fw-bold mb-3">{lang.REGISTER_TITLE}</h2>
                    <h5 className="text-dark">{lang.REGISTER_SUBTITLE_1}</h5>
                    <h5 className="text-dark mb-3">{lang.REGISTER_SUBTITLE_2}</h5>
                    <form onSubmit={ (event) => login(event )}>
                        <Form.Group className="mb-3 text-secondary">
                            <FloatingLabel controlId="emailId" label="Email">
                                <Form.Control name="email" type="text" placeholder="Email" className="w-100 fs-6" required onChange={(e)=>{changeInput(e)}} defaultValue={params.email} isInvalid={!validEmail} />
                                <Form.Control.Feedback type="invalid">
                                    Ingresa un email válido.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-5 text-secondary">
                            <FloatingLabel controlId="passId" label={lang.RESISTER_PASS_LABEL}>
                                <Form.Control name="password" type="password" placeholder="Ingrese una contraseña" className="w-100 fs-6" required onChange={(e)=>{changeInput(e)}} isInvalid={!validPass} />
                                <Form.Control.Feedback type="invalid">
                                    La contraseña debe tener entre 6 y 60 caracteres.
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <ButtonLogIn />
                        <ButtonGoogle />
                    </form>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-primary">
                <Modal.Title>Atención!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="error" className="bg-light text-dark">{errMsg}</Modal.Body>
            </Modal>
        </div>
    );
};

export default RegistrationPage;
