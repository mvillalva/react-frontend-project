import React from 'react'
import { Button } from 'react-bootstrap';
import { googleSingIn } from '../../functions/firebaseActions';
import logo from '../../img/google-icon.svg'
import './ButtonGoogle.css'

const loginGoogle = () => {
    googleSingIn()
}

const ButtonGoogle = () => {
    return (
        <Button variant="primary" type="button" className="btn-gl w-100 mb-2 btn-lg fs-6" onClick={() => {loginGoogle()}}>
            <div className='google-container'>
                <img className='google-logo' src={logo} alt='google logo'></img>
            </div>
            Iniciar con Google
        </Button>
    );
}

export default ButtonGoogle