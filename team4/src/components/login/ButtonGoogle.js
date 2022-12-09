import React from 'react'
import { Button } from 'react-bootstrap';
import { googleSingIn } from '../../functions/firebaseActions';
import { getCurrentLanguage } from '../../functions/general';
import logo from '../../img/google-icon.svg'
import { languajes } from '../../languages';
import './ButtonGoogle.css'

const loginGoogle = () => {
    googleSingIn()
}

const ButtonGoogle = () => {
    const current_language = getCurrentLanguage();
    const lang = languajes[current_language];

    return (
        <Button variant="primary" type="button" className="btn-gl w-100 mb-2 btn-lg fs-6" onClick={() => {loginGoogle()}}>
            <div className='google-container'>
                <img className='google-logo' src={logo} alt='google logo'></img>
            </div>
            {lang.BUTTON_SIGNIN_GOOGLE}
        </Button>
    );
}

export default ButtonGoogle