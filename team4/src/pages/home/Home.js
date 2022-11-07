import React, { useEffect } from "react";
import './Home.css'
import logo from '../../img/netflix-icon.svg'

const Home = (props) => {

    useEffect( () => {
        document.title = 'Página de inicio - Team4'
    })

    return (
        <div className="home-container">
            <div className="centered-div animate-container">
                <h1>Bienvenidos a</h1>
                <div>
                    <img src={logo} alt="logo" className="w-100"/>
                </div>
            </div>
        </div>
    )
}

export default Home