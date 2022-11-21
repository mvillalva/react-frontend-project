import React from 'react';
import { Button } from 'react-bootstrap';
// import { logInWithEmail } from '../../functions/firebaseActions';

export default function ButtonLogIn(){
    // const goPage = (e) => {
    //     e.preventDefault()
        
    //     //Borrar en la app final
    //     logInWithEmail('team4@test.com', '123456')
    //     // navigate('/start')
    // }

    return(
        <Button variant="danger" type="submit" >
            Iniciar sesión
        </Button>
    )
};