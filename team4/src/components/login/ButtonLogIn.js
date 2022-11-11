import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ButtonLogIn(){
    const navigate = useNavigate()

    const goPage = (e) => {
        e.preventDefault()
        navigate('/start')
    }

    return(
        <Button variant="danger" onClick={(e)=> {goPage(e)}}>
            Iniciar sesión
        </Button>
    )
};