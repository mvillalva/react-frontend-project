import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './RegistrationEmail.css'

const RegistrationEmail = () => {
  return (
    <Form.Group className="mb-3 text-secondary d-flex justify-content-center align-items-center flex-column flex-lg-row">
        <FloatingLabel controlId="emailId" label="Email">
            <Form.Control type="text" placeholder="Email" className="email-input" required />
            <Form.Control.Feedback type="invalid">
                Ingresa un email válido.
            </Form.Control.Feedback>
        </FloatingLabel>
        <Link className="button-start">Comenzar <span className="fas fa-chevron-right ps-2 f-icon" /></Link>
    </Form.Group>
  )
}

export default RegistrationEmail