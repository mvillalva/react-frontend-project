import React, { useState } from "react";
import { Stack, Container, Form, Button, Modal } from "react-bootstrap";
import { createUserWithEmail, googleSingIn, logInWithEmail } from "../../functions/firebaseActions";


const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState('')
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      await createUserWithEmail(correo, contra);
      
    } else {
      // si está iniciando sesión
      const error = await logInWithEmail(correo, contra)
      if (error) {
        setErrMsg(error)        
        handleShow()        
      }
    }
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "inicia sesión"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {estaRegistrandose ? "Regístrate" : "inicia sesión"}
          </Button>
        </Form>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "300px" }}
          onClick={() => googleSingIn()}
        >
          Acceder con Google
        </Button>

        <Button
          style={{ width: "300px" }}
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
      </Stack>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton  className="bg-warning">
          <Modal.Title>Atención!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="error" className="text-dark">{errMsg}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default Logueo ;