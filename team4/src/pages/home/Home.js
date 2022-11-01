import React, { useEffect } from "react";
import './Home.css'

const Home = (props) => {

    useEffect( () => {
        document.title = 'Página de inicio - Team4'
    })

    return (
        <div className="home-container">
            <div className="centered-div animate-container">
                <h1>Hola Mundo!!!</h1>
            </div>
        </div>
    )
}

export default Home