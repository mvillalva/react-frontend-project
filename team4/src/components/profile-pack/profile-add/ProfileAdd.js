import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../../context/MainContext";
import { updateData } from "../../../functions/firebaseActions";
import { uuidv4 } from "@firebase/util";
import './ProfileAdd.css'
import { TYPE } from "../../../functions/general";

const ProfileAdd = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const {profiles, changeState} = useContext(MainContext)

    let bg = 'bg-5'
    let name = ''
    
    const addProfile = async (e) => {
        e.preventDefault()
        
        let input = document.getElementById('profile-name')
        
        const data = {
            uuid: uuidv4(),
            name: input.value,
            avatar: '',
            bg: bg,
            type: 'Profile',
            playlist: [],
        }

        profiles.push(data)

        await updateData('users', {profiles: profiles})
        changeState(TYPE.profiles, profiles)

        window.location.href = '/ManageProfiles'
    }

    const showAvatars = () => {

        let input = document.getElementById('profile-name')
        
        const data = {
            name: input.value,
            bg: bg,
            page: '/AddProfile'            
        }
        
        navigate('/ProfileAvatars', {state: data})
    }

    if (location.state) {
        bg = location.state.bg
        name = location.state.name
    }

    return (
        <div className="add-container">
            <div className="centered-div animate-container">
                <div className="add-actions-container">
                    <h1 className="hh1">Agregar perfil</h1>
                    <h2 className="hh2">Agrega un perfil para otra persona que ve Netflix.</h2>
                    <div className="add-metadata add-entry">
                        <div className="profile-avatar">
                            <div className={'profile-icon ' + bg} onClick={()=>{showAvatars()}}></div>
                        </div>
                        <div className="add-add-parent">
                            <div className="add-entry-inputs">
                                <input type="text" id="profile-name" className="" placeholder="Nombre" defaultValue={name}/>
                                <label htmlFor="profile-name" aria-label="Nombre"></label>
                                <div className="option-wrapper">
                                    <div className="add-kids-option">
                                        <input type="checkbox" id="add-kids-profile" />
                                        <label htmlFor="add-kids-profile"></label>
                                        <span className="add-kids-marker" role="checkbox" aria-checked="false">¿Niños?</span>
                                        <span className="kids-profile-tooltip">Si se selecciona esta opción, este perfil solo puede ver películas y series clasificadas para menores de 12&nbsp;años.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/ManageProfiles" className="add-button preferred-action" onClick={(e)=>{addProfile(e)}}><span>Continuar</span></Link>
                    <Link to="/ManageProfiles" className="add-button"><span>Cancelar</span></Link>
                </div>
            </div>
        </div>
    )
}


export default ProfileAdd